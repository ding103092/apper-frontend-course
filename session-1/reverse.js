function reverse(word) {
    // the short solution
    // return word.split('').reverse().join('');

    // Using for loop to get the reverse of the word
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }
    return result;
}

const word = 'reginald';
const reversedWord = reverse(word);
console.log(reversedWord) // 'dlaniger'