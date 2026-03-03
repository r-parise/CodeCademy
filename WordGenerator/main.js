const actionPhrases = ['Time to', 'Let\'s', 'Ready to', 'Get ready to', 'It\'s time to'];
const verbs = ['duel', 'fight', 'battle'];
const prepositions = ['with', 'against', 'versus'];
const opponents = ['your opponent', 'the enemy', 'your rival'];
const punctuations = ['!', '!!', '!!!'];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateSentence() {
    const action = getRandomElement(actionPhrases);
    const verb = getRandomElement(verbs);
    const preposition = getRandomElement(prepositions);
    const opponent = getRandomElement(opponents);
    const punctuation = getRandomElement(punctuations);

    return `${action} ${verb} ${preposition} ${opponent}${punctuation}`;
}

// Print to console instead of DOM
console.log(generateSentence());