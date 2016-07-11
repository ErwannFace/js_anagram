//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
    this.word = word;
    this.mot = this.trier(this.word);
}

Anagram.prototype.trier = function (trie) {
    var motAlpha = trie.toLowerCase().split("").sort().join("");
    /* ===
    var motAlpha = this.trie.toLowerCase();
    var motAlpha = motAlpha.split("");
    var motAlpha = motAlpha.sort();
    var motAlpha = motAlpha.join(""); */
    return motAlpha;
}

Anagram.prototype.matches = function (words) {

    if (typeof words=='string'){
        words=arguments;
    }

    var motAlphaTaille = words.length;
    var i = 0;
    var matches = [];

    for (i; i < motAlphaTaille; i++) {
        if (words[i].toLowerCase() != this.word.toLowerCase()){

            var motListe = this.trier(words[i]);
            if (motListe === this.mot) {
                matches.push(words[i]);
            }

    }
}

    return matches;

}