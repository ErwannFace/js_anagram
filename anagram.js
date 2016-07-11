//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
  this.mot = this.filtrer(this.word);
}


// //#1
 Anagram.prototype.matches = function (words) {
// //
// // YOUR CODE GOES HERE
// //
	var resultat =[]; //faire pour comparer les éléments.

	//
	//Je fais une boucle pour parcourir mon table avec For
	//
	for (var i = 0; i < words.length; i++){ 

		var mot = words[i];
		//
		//J'impose une condition 
		//
		if(mot !== this.word){

			console.log("no matches!");

			if(mot === this.word){

						resultat.push(words[i]);
			console.log("Anagram!:" + resultat);
			}
		}
	} 

return resultat; //permettre à jasmin d'avoir un retour du résultat pour comparer.
	
}

//#2
Anagram.prototype.filtrer = function (filtre){

var inv = this.word.toLowerCase().split("").sort().join("");
	console.log(inv);
	 return inv;
}