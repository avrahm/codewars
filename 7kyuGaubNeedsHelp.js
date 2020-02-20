//7 kyu - Gauß needs help! (Sums of a lot of numbers).

//https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript

// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050 
// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code.

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

// Credits: this kata was inspired by the farzher's kata 'Sum of large ints' . In fact, it can be seen as a sort of prep kata for that one.

function f(n) {
    //created a variable called decimal 
    //used Math.floor to round number to nearest integer
    //and subtracted that answer from itself
    //if the result is anything but 0 it means it is a decimal.
    var decimal = (n - Math.floor(n))
    // if n is not a number OR n is less than or equal to zero 
    //OR the variable decimal is no 0
    if (typeof (n) != 'number' || n <= 0 || decimal != 0) {
        //any conditions are true than return false
        return false
    } else {
        //if any condition is not true than
        //create a variable called count
        //loop thru each number and add it to itself
        //return the total count
        let count = n;
        for (let i = 0; i < n; i++) {
            count += i
        }
        return count
    }
};