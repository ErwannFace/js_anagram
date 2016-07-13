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

	var cle_mot = this.trier(this.word);
	var resultat =[]; //faire pour comparer les éléments.

	//Je fais une boucle pour parcourir mon table avec For
	for (var i = 0; i < words.length; i++) { 
		var mot_tab = words[i];
		var trier_mot = this.trier(mot_tab);
		//
		if(trier_mot === cle_mot && mot_tab != this.word.toUpperCase()) {

			/*console.log("no matches!"+ trier_mot);*/
			
			resultat.push(mot_tab);

			/*console.log("Anagram!:" + resultat);*/


		}
	} 

     return resultat; 
     
}

//#2
Anagram.prototype.trier = function (words){
    
    var mot_cle = words.toUpperCase();
    //Ici je hache, je trie puis je reforme une nouvelle chaîne de caractère
    mot_cle = mot_cle.split("").sort().join("");
    //Console.log pour avoir une vision de la sortie
	/*console.log(mot_cle); */
	 return mot_cle;
}