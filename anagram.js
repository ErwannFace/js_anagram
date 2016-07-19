//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

function SortAnagram (str) {
	return str.split("").sort().join("");
}

function IdentiqueAnagram (word1, word2) {
	return SortAnagram(word1) == SortAnagram(word2);
}

function MultiAnagram (word1, word2) {
	word1 = word1.toLowerCase();
  	word2 = word2.toLowerCase();
	return word1 != word2 && IdentiqueAnagram(word1, word2);
}

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter

Anagram.prototype.matches = function (words) {
	return words.filter(function(word) {
		return MultiAnagram(this.word, word);
	}, this);
//
// YOUR CODE GOES HERE
//
}