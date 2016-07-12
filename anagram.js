
function Anagram(mot) {
 this.mot = mot;
}

Anagram.prototype.matches = function Anagram (mots) {
if(typeof(mots) === "string") {
   if(unAnagrams(mots, this.mot)) {
   return [mots];
   }
}
else {
    return mots.filter(function(mot) {
    return unAnagrams(this.mot, mot);
    }, this);    
}
return mots.filter(function(mot) {
    return unAnagrams(this.mot, mot);
}, this);
};

function unAnagrams(premierMots, deuxiemeMots) {
    premierMots = premierMots.toLowerCase();
    deuxiemeMots = deuxiemeMots.toLowerCase();
    return premierMots !== deuxiemeMots && memeLettre(premierMots, deuxiemeMots);
}
function memeLettre(premierMots, deuxiemeMots) {
    return trie(premierMots) == trie(deuxiemeMots);
}

function trie(str) {
    return str.split('').sort().join('');