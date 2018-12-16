/*
 * Unit Tests
 *
 */


// Dependencies
var lib = require('./../app/lib.js');
var assert = require('assert');

// Holder for Tests
var unit = {};

// Assert that the isPalindrome function of a word 'eye' is returning true
unit['lib.isPalindrome of a word "eye" should return true'] = function(done){
  var val = lib.isPalindrome("eye");
  assert.equal(val, true);
  done();
};

// Assert that the isPalindrome function of a number 12321 type should return number
unit['lib.isPalindrome of a number 12321 type should return number'] = function(done){
  var val = lib.isPalindrome(12321);
  assert.equal(typeof(val), 'number');
  done();
};

// Assert that the isArticleWord function of a word 'the handsome' is returning true
unit['lib.isArticleWord of a word "the handsome" should return true'] = function(done){
  var val = lib.isArticleWord("the handsome");
  assert.equal(val, true);
  done();
};

// Assert that the randomAnEvenNumber function returning true
unit['lib.randomAnEvenNumber should return true'] = function(done){
  var val = lib.randomAnEvenNumber();
  assert.equal(val, true);
  done();
};

// Assert that the randomAnEvenNumber function returning false
unit['lib.randomAnEvenNumber should return false'] = function(done){
  var val = lib.randomAnEvenNumber();
  assert.equal(val, false);
  done();
};

// Export the tests to the runner
module.exports = unit;
