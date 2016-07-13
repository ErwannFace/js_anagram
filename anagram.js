//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (words) {
 return words.filter(function(word) {
   return lesAnagram(this.word, word);
 }, this);
}
function lesAnagram(word1, word2) {
 word1 = word1.toUpperCase();
 word2 = word2.toUpperCase();
 return word1 != word2 && MemeMot(word1, word2);
}
function tri(word) {
 return word.split('').sort().join('');
}

function MemeMot(word1, word2) {
 return tri(word1) == tri(word2);
}

