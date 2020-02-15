// 7 kyu
// You're a square!

// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false

//first solution
var isSquare = function(n){
  
    let numchk;

  for(let i = 0; i < n+1; i++){
    
    
      numchk = n/i;
      
      if(i === numchk){

       return true;
        // console.log('loop'+ numchk)
      } 
  }
// console.log('out loop'+ numchk)
if(n<0){
  return false
} else if(numchk==1) {
  return false
} else {
  return true
  }

}


//refactoring solution with comments
var isSquare = function(n){
    //create numchk variable
    let numchk;
      //loop thru each number to n+1
      //ie. if n is 4
      //loop 0,1,2,3, and 4 (hence i+1)
      for(let i = 0; i < n+1; i++){
        //numchk will equal n/i
        //divide each i into n
        //so 4/4, 4/3, 4/2, 4/1, and 4/0
        //and set numchk to that value
        //ie. 4/2 = 2 so set numchk to 2
        numchk = n/i;
          //when looping if i matches numchk return true
          //in the example when 4/2 = 2, numchk was 2 and i was 2, so there was a match and the return is true.
          //but for the others, 4/3 = 1.33 so numchk is 1.33 and i was 3 there is no match
          if(i === numchk){
           return true;
          } else { 
          //if i does not equal numchk then set numchk to 1
            numchk = 1
            }
      }
  //used a ternary conditional operator
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  //this say - if n is less than 0 or numchk equals 1 and n is NOT 0 then return false, else return true
  return (n<0 || numchk==1 && n!=0) ?  false : true
  
  }