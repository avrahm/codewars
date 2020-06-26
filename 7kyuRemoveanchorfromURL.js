// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

// 7 kyu - Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples

// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

function removeUrlAnchor(url){
    // TODO: complete
    var anchorIndex = url.indexOf('#');
    if(url.includes("#")){
      var finalUrl = url.slice(0,anchorIndex);
      return finalUrl;
    } else {
      return url;
    }
  }