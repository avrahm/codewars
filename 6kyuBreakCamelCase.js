// https://www.codewars.com/kata/5208f99aee097e6552000148

// 6 kyu
// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// solution("camelCasing")  ==  "camel Casing"

// complete the function
function solution(string) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
      function findUpperAndAddSpace(match, offset, string) {
        return (offset > 0 ? ' ' : '') + match.toUpperCase();
      }
    //replace method takes two parameters (regex/substr, newSubstr/function)
    return string.replace(/[A-Z]/g, findUpperAndAddSpace)
  }