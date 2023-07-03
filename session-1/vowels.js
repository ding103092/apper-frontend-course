function convertToVowels(word) {
    const vowels = ['a','e','i','o','u'];
    // Only returns the vowels from the word
    return word.split('').filter(char => vowels.includes(char)).join('');
}

const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo