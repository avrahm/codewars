// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

// 7 kyu - Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    // your code
    var strUpper = s.toUpperCase();
    var strLower = s.toLowerCase();
    var strPosition = [];
    var str = [];
    
    for (var i=0; i < strUpper.length; i++){
      str.push(strUpper[i]);
      if (strLower[i] === strLower[i]) {
        strPosition.push(i-2);
      }
        for (var j=1; j < strPosition.length; j++){
          str.push(strLower[i]);
        }str.push('-');
    }
    var completeStr = str.join('');
    return completeStr.substring(0, completeStr.length - 1);
  }