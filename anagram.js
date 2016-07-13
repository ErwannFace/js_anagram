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