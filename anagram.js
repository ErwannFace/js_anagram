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
//
// YOUR CODE GOES HERE
//
	for (var i = 0; i < words.length; i++){
		var mot = words[i];
		// var motinverser = mot.reverse;
		// console.log("valeur de word :"+ this.word);
		// console.log("valeur de mot :"+ mot);
		if(mot === this.word){

		console.log("matches!");

		}

		else{

		console.log("no matches!");

		}

	}
	
}