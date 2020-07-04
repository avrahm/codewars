//https://www.codewars.com/kata/525f50e3b73515a6db000b83

// 6 kyu - Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge. 
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  
    var phoneNumber = numbers.toString();
    phoneNumber = phoneNumber.replace(/,/g,"");
    var areacode = phoneNumber.substring(0, 3);
    var firstThreeDigits = phoneNumber.substring(3, 6);
    var lastFourDigits = phoneNumber.substring(6, 10);
    
   return '(' + areacode + ') ' + firstThreeDigits + '-' + lastFourDigits;
  }