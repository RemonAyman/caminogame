import { QUESTION_BANK } from './src/data/GameData.js';

console.log("Verifying QUESTION_BANK...");
let errors = 0;

QUESTION_BANK.forEach((q, index) => {
    if (!q.question || q.question.trim() === "") {
        console.error(`Error in item ${index} (ID: ${q.id}): Missing 'question'`);
        errors++;
    }
    if (!q.answer || q.answer.trim() === "") {
        console.error(`Error in item ${index} (ID: ${q.id}): Missing 'answer'`);
        errors++;
    }
    if (q.type === 'sign' && !q.signId) {
        console.error(`Error in item ${index} (ID: ${q.id}): Missing 'signId' for sign type`);
        errors++;
    }
    if (!q.hint1 || !q.hint2) {
        console.error(`Error in item ${index} (ID: ${q.id}): Missing hints (found hint1: ${!!q.hint1}, hint2: ${!!q.hint2})`);
        errors++;
    }
});

if (errors === 0) {
    console.log("✅ All questions appear valid!");
} else {
    console.error(`❌ Found ${errors} errors.`);
}
