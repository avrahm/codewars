//7 kyu Exes and Ohs
//https://www.codewars.com/kata/55908aad6620c066bc00002a

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
    var match = str.toLowerCase();
    var x = 0;
    var o = 0;
    //i loop through for x and o and count each
    for (i=0; i< match.length; i++){
     if(match[i]==="o"){
       x ++;
     } else if (match[i]==="x"){
       o ++;
     }
    }
    //last I check the count if the match will return true if they match, and false if they don't
  return x === o;
}