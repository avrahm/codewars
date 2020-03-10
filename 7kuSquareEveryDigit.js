//7 kyu - Square Every Digit

//https://www.codewars.com/kata/546e2562b03326a88e000020

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
//first I create a variable str and used the function toString() to set the number as a string
//to split() i first had to have a string. In my split('') I used quotes with no space to create an array
//character by character. so 9119 would become ['9','1','1','9']
var str = num.toString().split('')

//set an empty array to catch my pushes from inside the forloop
let arr = []
for (let i=0; i < str.length; i++){
//using a push to send each number * itself out of the for loop into the arr variable
  arr.push(str[i] *= str[i])
}
//join('') will put the array back to a string with no spaces and Number() converts the string to a number 
return Number(arr.join(''));
}


