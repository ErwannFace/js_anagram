'use strict';

function Anagram(word) {
  this.word = word;
};

Anagram.prototype.matches = function (words) {
	var result = [];
	var ref = this.nbrChar(this.word.toLowerCase());
	
	//si arg == str et non array
	if (typeof words === 'string') {
		words = arguments;
	}
	
	for (var i = 0 ; i < words.length ; i++) {
		var elemnt = this.nbrChar(words[i].toLowerCase());
		if (this.word.toLowerCase() !== words[i].toLowerCase()) {
			if (this.compare(ref, elemnt)) {
				result.push(words[i]);
			}
		}
	}
	
	return result;
};

//retourne un object dont l'index est une lettre et la valeur le nombre d'occurence de cette lettre
Anagram.prototype.nbrChar = function (str) {
	var liste = [];
	for (var i = 0 ; i < str.length ; i++) {
		var index = str.charAt(i);
		liste[index] = (!liste[index]) ? 1 : liste[index] + 1;
	}
	return liste;
};


Anagram.prototype.compare = function (ref, elemnt) {
	var i = 0;
	for (var x in ref) {
		//si index de ref n'existe pas dans elemnt
		if (!elemnt[x]) {return false;}
		//si index de ref n'a pas la m valeur que elemnt
		if(ref[x] != elemnt[x]) {return false;}
		
		i++;
	}
	var j = 0;
	for (var x in elemnt) {j++;}
	//si taille ref != taille elemnt (si index elemnt n'existe pas dans ref)
	if (i != j) {return false;}
	
	return true;
};