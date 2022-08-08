// 1. Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.


const zeroSum= (num) => {
    let sum = false
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (i !== j) {
                if (num[i] + num[j] === 0) {
                    sum = true;
                };
            };
        };
    };

    return sum
}

console.log(zeroSum([1,9,3,-1]))


//The time complexity of zeroSum function = quadratic. 


// 2. Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const uniqueCharacters = (word) => {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(uniqueCharacters('same'))
console.log(uniqueCharacters('mom'))

// The time complexity of uniqueCharacters function = O(n)(increases in a linear way)


//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.” Write a function to check a sentence to see if it is a pangram or not.


const pangram = (string) => {
    let strArr = string.toLowerCase();
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alpha.length; i++) {
        if (strArr.indexOf(alpha[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))
console.log(pangram("I like cats, but not mice"))

// The time complexity of this function = O(n).


// 4. Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(string) {
   let stringSplit = string.split(' ');
   let longestWord = 0;

   for(let i = 0; i <stringSplit.length; i++){
    if(stringSplit[i].length > longestWord){
        longestWord = stringSplit[i].length;
    }
   }
return longestWord
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

//The time complexity of this function = O(n).