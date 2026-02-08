import { db } from '../firebaseConfig';
import { doc, runTransaction, onSnapshot, setDoc, getDoc, collection, query } from "firebase/firestore";
import { PATROLS } from '../constants';

const COLLECTION_NAME = "rahat_scores";

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
    return db?.app?.options?.projectId && db.app.options.projectId !== "your-project-id";
};

// Initialize the leaderboard documents if they doesn't exist
const initializeLeaderboard = async () => {
    if (!isFirebaseConfigured()) {
        const localData = localStorage.getItem(COLLECTION_NAME);
        if (!localData) {
            const initialScores = {};
            PATROLS.forEach(p => initialScores[p] = 0);
            localStorage.setItem(COLLECTION_NAME, JSON.stringify(initialScores));
        }
        return;
    }

    // Ensure each patrol has a document
    for (const patrol of PATROLS) {
        const docRef = doc(db, COLLECTION_NAME, patrol);
        try {
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                await setDoc(docRef, { score: 0 });
            }
        } catch (e) {
            console.warn(`Firebase init failed for ${patrol}:`, e);
        }
    }
};

export const updatePatrolScore = async (patrolName, scoreToAdd) => {
    if (!isFirebaseConfigured()) {
        console.warn("Firebase not configured. Using localStorage.");
        const currentScores = JSON.parse(localStorage.getItem(COLLECTION_NAME)) || {};
        // Initialize if empty (fallback)
        if (!currentScores[patrolName]) currentScores[patrolName] = 0;
        
        currentScores[patrolName] += scoreToAdd;
        localStorage.setItem(COLLECTION_NAME, JSON.stringify(currentScores));
        console.log("Local score updated successfully!");
        return;
    }

    // Document is now named after the patrol
    const docRef = doc(db, COLLECTION_NAME, patrolName);

    try {
        await runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(docRef);
            if (!sfDoc.exists()) {
                // Should be initialized, but just in case
                transaction.set(docRef, { score: scoreToAdd });
                return;
            }

            const currentScore = sfDoc.data().score || 0;
            transaction.update(docRef, { score: currentScore + scoreToAdd });
        });
        console.log("Score updated successfully!");
    } catch (e) {
        console.error("Transaction failed: ", e);
    }
};

export const subscribeToLeaderboard = (callback) => {
    // Ensure docs exist
    initializeLeaderboard();

    if (!isFirebaseConfigured()) {
        console.warn("Subscribing to localStorage updates.");
        const localData = JSON.parse(localStorage.getItem(COLLECTION_NAME)) || {};
        callback(localData);

        const handleStorageChange = (e) => {
            if (e.key === COLLECTION_NAME) {
                callback(JSON.parse(e.newValue));
            }
        };
        
        window.addEventListener('storage', handleStorageChange);
        const interval = setInterval(() => {
             const data = JSON.parse(localStorage.getItem(COLLECTION_NAME)) || {};
             callback(data);
        }, 1000);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }

    // Subscribe to the whole collection
    const q = query(collection(db, COLLECTION_NAME));
    return onSnapshot(q, (querySnapshot) => {
        const scores = {};
        // Initialize all to 0 first to ensure all patrols show up even if doc missing
        PATROLS.forEach(p => scores[p] = 0);
        
        querySnapshot.forEach((doc) => {
            // doc.id is the patrol name, doc.data().score is the score
            if (scores.hasOwnProperty(doc.id)) {
                 scores[doc.id] = doc.data().score || 0;
            }
        });
        callback(scores);
    }, (error) => {
        console.error("Leaderboard subscription failed:", error);
        const localData = JSON.parse(localStorage.getItem(COLLECTION_NAME)) || {};
        callback(localData);
    });
};
