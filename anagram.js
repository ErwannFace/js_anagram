//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;

}


// //#1
 Anagram.prototype.matches = function (words) {
// //
// // YOUR CODE GOES HERE
// //
	var cle_mot = this.trier(this.word);
	var resultat =[]; //faire pour comparer les éléments.

	//Je fais une boucle pour parcourir mon table avec For
	for (var i = 0; i < words.length; i++) { 
		var mot = words[i];
		var inversee = this.trier(mot);
		//
		//J'impose une condition 
		//
		if(inversee === cle_mot && mot != this.word.toUpperCase()) {

			console.log("no matches!"+ mot);
			
			resultat.push(mot);

			console.log("Anagram!:" + resultat);


		}
	} 

return resultat; //permettre à jasmin d'avoir un retour du résultat pour comparer.
	
}

//#2
Anagram.prototype.trier = function (words){
// var mot_cle = this.word;
var mot_cle= words.toUpperCase();
 mot_cle= mot_cle.split("");
 mot_cle= mot_cle.sort();
 mot_cle= mot_cle.join("");
	console.log(mot_cle);
	 return mot_cle;
}