// 6 kyu - Stop gninnipS My sdroW!

// https://www.codewars.com/kata/5264d2b162488dc400000001/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(words){
    //first break the string into an array with split(' ')  having the space will break at each word
      let wordsArr = words.split(' ');
    //created an empty array for the new words
      let newStr = [];
      
      //i looped through the array of words to find each word and its index. 
     wordsArr.forEach(function(word,index){ 
     //if a word has more than 4 characters i again split the word to an array but this time using ('')
     // without the space will break 'word' into ['w','o','r','d']
     //
         if(word.length>4){
          let breakWord = word.split('');
          //used the reverse method to reverse the array and then join method 
          let reverseWord = breakWord.reverse();
          let newWord = reverseWord.join('');
          //since i know the index of each word i splice that word back into the empty newStr at its original index 
          
         newStr.splice(index,0,newWord);
         }
        else if(word.length<=4){
    //if the word characters is less than or equal to 4 we just splice the word to its original index
         newStr.splice(index,0,word);
         }
       })
    // lastly i join the whole newStr array into a string with join(' ') having the space with insert a space between each word 
    return newStr.join(' ');
    }