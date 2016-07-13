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
    return motAlpha;
}

Anagram.prototype.matches = function (words) {

    if (typeof words == "string") {
        words = arguments;
    }

    var matches = [];
    var i = 0;

    for (i; i < words.length; i++) {
        if (words[i].toLowerCase() != this.word.toLowerCase()) {
            if (this.trier(words[i]) === this.mot) {
                matches.push(words[i]);
            }
        }
    }

    return matches;
}