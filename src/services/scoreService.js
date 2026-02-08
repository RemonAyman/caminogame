import { db } from '../firebaseConfig';
import { doc, runTransaction, onSnapshot, setDoc, getDoc } from "firebase/firestore";
import { PATROLS } from '../constants';

const COLLECTION_NAME = "rahat_scores";
const DOC_ID = "leaderboard";

// Initialize the leaderboard document if it doesn't exist
const initializeLeaderboard = async () => {
    const docRef = doc(db, COLLECTION_NAME, DOC_ID);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        const initialScores = {};
        PATROLS.forEach(p => initialScores[p] = 0);
        await setDoc(docRef, initialScores);
    }
    };

export const updatePatrolScore = async (patrolName, scoreToAdd) => {
    const docRef = doc(db, COLLECTION_NAME, DOC_ID);

    try {
        await runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(docRef);
            if (!sfDoc.exists()) {
                // Should be initialized, but just in case
                transaction.set(docRef, { [patrolName]: scoreToAdd });
                return;
            }

            const currentScore = sfDoc.data()[patrolName] || 0;
            transaction.update(docRef, { [patrolName]: currentScore + scoreToAdd });
        });
        console.log("Score updated successfully!");
    } catch (e) {
        console.error("Transaction failed: ", e);
    }
};

export const subscribeToLeaderboard = (callback) => {
    // Ensure it exists first
    initializeLeaderboard();

    const docRef = doc(db, COLLECTION_NAME, DOC_ID);
    return onSnapshot(docRef, (doc) => {
        if (doc.exists()) {
            callback(doc.data());
        } else {
            callback({});
        }
    });
};
