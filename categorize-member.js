//Categorize New Member

//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Note for F#: The input will be of (int list list) which is a List<List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){

    //first I created an empty array
    let mainArr = [];
    
    //then I created a forEach loop through each data point
      data.forEach(ele => {
      
      //in the forEach loop I created another empty arr
        let arr = []
        
        //if the index[0] is greater or equal to 55 AND index[1] is greater than 7
        if(ele[0]>=55 && ele[1]>7){
        
        //push the word Senior to the empty 'arr' in the loop
          arr.push('Senior')
          
        //if indexes don't match    
        } else { 
        
        //push the word Open to the 'arr'
          arr.push('Open')
          }
        
        // checking what my arr looks like console.log(arr)
        //still failed so I joined the 'arr' 
        let joinArr = arr.join()
        
        //pushed the joinArr into the mainArr
      mainArr.push(joinArr)
      })
      
      //checked again console.log(mainArr)
      //it works so i return the values
      return mainArr
    }