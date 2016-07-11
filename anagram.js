//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
    this.word = word;
    this.mot = this.trier(this.word);
    //ligne permettant de trier le motAlpha
}

Anagram.prototype.trier = function (trie) {
    var motAlpha = trie.toLowerCase().split("").sort().join("");
    /* fonction universelle pour trier un mot ===
    var motAlpha = this.trie.toLowerCase();
    var motAlpha = motAlpha.split("");
    var motAlpha = motAlpha.sort();
    var motAlpha = motAlpha.join(""); */
    return motAlpha;
}

Anagram.prototype.matches = function (words) {

    if (typeof words == "string") {
            words = arguments;
        }

    var matches = []; //variable pour tableau final
    var i = 0; //var pour parcourir notre tableau
    var tailleTableau = words.length; //calculer la longueur du tableau

        for (i; i < tailleTableau; i++) { //condition pour parcourir le tableau
            if (words[i].toLowerCase() != this.word.toLowerCase()) {
                var motTabTrie = this.trier(words[i]);//ligne pour trier chaque index du tableau
                if (motTabTrie === this.mot) {

                //condition de comparaison entre motAlpha trié et motTableau trié
                matches.push(words[i]);//ajout des anagrammes au tableau final
            }
        }

        }
        /*alert("c." + matches); Permet de voir si je retourne bien mon putain de tableau*/
        return matches;//return le tableau final
}