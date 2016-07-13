//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Anagram(mot) {
 this.mot = mot;
 // La méthode match() permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.
}Anagram.prototype.matches = function Anagram (mots) {
if(typeof(mots) === "string") {
	// Sont anagrammes (mots, this.word)? retourner mots: return '';
   if(unAnagrams(mots, this.mot)) {
   return [mots];
   }
}
// L'opérateur typeof renvoie une chaîne qui indique le type de son opérande.
else {
	//La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine pour lesquels la fonction callback retourne true
    return mots.filter(function(mot) {
    return unAnagrams(this.mot, mot);
    }, this);    
}
// fonction de filtrage
return mots.filter(function(mot) {
    return unAnagrams(this.mot, mot);
}, this);
};function unAnagrams(premierMots, deuxiemeMots) {
    premierMots = premierMots.toLowerCase();
    deuxiemeMots = deuxiemeMots.toLowerCase();
    return premierMots !== deuxiemeMots && memeLettre(premierMots, deuxiemeMots);
}
// fonction de triage
function memeLettre(premierMots, deuxiemeMots) {
    return trie(premierMots) == trie(deuxiemeMots);
}function trie(str) {
    return str.split('').sort().join('');

 

//La méthode join() réunit tous les éléments d'un tableau dans une chaine de caractères

 

//La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Le tri n'est pas forcément stable. Le tri s'effectue par défaut selon les points de code Unicode de la chaine de caractères.
//La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes