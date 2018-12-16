/*
 * Library for various function task
 *
 */

// Contain for all the library
var lib = {};

// Simple function for checking is palindrome
lib.isPalindrome = function(str){
  // If number, change to string
  if(typeof(str)=='number'){
    str = str.toString()
  }
  var lowerStr = str.toLowerCase();
  // Reverse the string
  var reverseStr = lowerStr.split('').reverse().join('');
  return reverseStr === lowerStr;
}

// Simple function for checking the word that have the article
lib.isArticleWord = function(str){
  if (str.indexOf('a ')==0 ||
      str.indexOf('an ')==0 ||
      str.indexOf('the ')==0 ||
      str.indexOf('A ')==0 ||
      str.indexOf('An ')==0 ||
      str.indexOf('The ')==0){
    return true
  } else {
    return false
  }
}

// Simple function for create a random number and check is even number
lib.randomAnEvenNumber = function(){
  var randomNumber = Math.floor(Math.random() * 100);
  if(randomNumber%2==0){
    return true;
  } else {
    return false;
  }
}

// Export the module
module.exports = lib;
