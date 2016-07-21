//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
  this.wordCompare = this.generateComparator(word);
  
}

Anagram.prototype.matches = function (words) {
	var tab = [];
//			return tab;

	for (var i=0;i<words.length;i++){
		var mot = words[i];
		var motCompare = this.generateComparator(mot);
		if (mot.length == this.word.length){
		if (motCompare == words){
			tab.push(mot);
		}
		}
	}

	return tab;
}
	
Anagram.prototype.generateComparator = function(word){
	return word.toUpperCase().split("").sort().join();

