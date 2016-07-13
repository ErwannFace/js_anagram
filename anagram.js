//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

<<<<<<< HEAD
//no matches
//does not detect false positives
//does not detect anagram subsets
//does not detect a word as its own anagram
Anagram.prototype.matches = function(words) {
var result=[];
Anagram.prototype.anagram = function(str){
    var result=[];
    for(var i=0;i<str.length;i++){
    var words=str.charAt(i).toLowerCase();
    words=words?str+1:1;}
  return str.split('').sort().join('');
}

return result;
}

/*Anagram.prototype.anagram=function(str1, str2) {

  return (str1 !== str2 && haveSameLetters(word1, word2));
=======
Anagram.prototype.matches = function (words) {
var result = [];
return result;
>>>>>>> bf0d712b346b3b1ad3aec9a7e7f3511b5a1f769d
}

Anagram.prototype.multi=function(word1, word2) {
  return sorted(str1) == sorted(str2);
}


}*/



