function isPalindrome(word) {
    // Check if word is a palindrome by converting word to array
    // reverse it, then join it back
    return word === word.split('').reverse().join('');

    // Uses for loop to check if word is a palindrome or not
    // for (let i = word.length - 1; i >= 0; i--) {
    //     if (word[i] !== word[word.length - 1 - i]) {
    //         return false;
    //     }
    // }
    // return true;
}

const word = 'racecar'
if (isPalindrome(word)) {
    console.log('The word ' + word + ' is a palindrome!')
} else {
    console.log('The word ' + word + ' is not a palindrome!')
}