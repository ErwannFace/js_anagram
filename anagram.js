//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(mot) {
   this.mot = mot;
}
Anagram.prototype.matches = function Anagram (mots) {
   var matches = [];    
   for (var i = 0; i < mots.length; i++) {
       var motAtuel = mots[i];        
	   if (motAtuel.length == this.mot.length && motAtuel != this.mot) {
			var lettresMot = motAtuel.split('').sort();
			var lettresMotEgual = this.mot.split('').sort();            
			var isMatch = true;            
			for (var j = 0; j < lettresMot.length; j++) {
				if (lettresMot[j] != lettresMotEgual[j]) {
				isMatch = false;
				}
			}            
			if (isMatch) {
				matches.push(motAtuel);
			}
		}   
	}
	return matches;
}
