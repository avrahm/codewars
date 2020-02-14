//https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript

//Help Bob count letters and digits. -- 7kyu

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
    //I first set const for a pattern using regexp (regular expression)
    const patt = /[0-9]|[a-z]|[A-Z]/g;
    //use the match function to find all letters and digits and count the length.
    return (input.match(patt)||[]).length;
    }