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
    var motAlphaTaille = words.length; //calculer la longueur du tableau
    var matches = []; //variable pour tableau final
    var i = 0; //var pour parcourir notre tableau

    if (typeof words === "string") {
        words = arguments;
    }

    for (i; i < motAlphaTaille; i++) { //condition pour parcourir le tableau
        var motTabTrie = this.trier(words[i]);//ligne pour trier chaque index du tableau

        if (motTabTrie === this.mot && words[i].toLowerCase() != this.word.toLowerCase()) {
            //condition de comparaison entre motAlpha trié et motTableau trié
            matches.push(words[i]);//ajout des anagrammes au tableau final
        }
    }
    alert("c." + matches);
    return matches;//return le tableau final
}
    
    
    
    
    
    
    
    

/*function trierMotAlpha(words) { //trier par odre alphabétique le mot donné.
    var tabMotAlpha = words.split(""); //décompose words en un tableau de lettre.
    var result = tabMotAlpha.sort(); // Tri tabMotAlpha (words) par odre alphabétique.
    return = result;
}

function decomposeListe(matches) {
    var i = 0;

    for (i; i++) {
        var i = matches.split("");
        var result = matches.sort();
        return = result;
    }
}

function comparaison {
    if (words === i) {
        return = i;
    }
}*/
    
    
    
/*function trierMotAlpha(words) { //trier par odre alphabétique le mot donné.
    var tabMotAlpha = words.split(""); //décompose words en un tableau de lettre.
    var motTrier = tabMotAlpha.sort(); // Tri tabMotAlpha (words) par odre alphabétique.
    var motRecompose = motTrier; //Reforme la string.
    var i = 0;
    
    for (i; ) {
        
    }
    
}*/

/*function trierMotAlpha(words) {
    var motAlpha = words.split("").sort().join(); //décompose, tri et reforme une chaine de caractère.
    var motAlphaTaille = words.length;
    var i = 0;
    
    for (i; ) {
        
    }
    
}*/