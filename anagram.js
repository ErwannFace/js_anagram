//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
    this.word = word;
}

Anagram.prototype.tri = function (mot) {
    //fonction de tri
    var str = mot.toLowerCase();
    str = str.split('');
    str = str.sort();
    str = str.join('');
    console.log(str);
    return str;
}

Anagram.prototype.matches = function (words) {
    var drow = this.tri(this.word); //mon mot traité
    var i = 0; //pour la boucle for (note:obligé de la déclarer à cause de 'use strict').
    var matches = []; //tableau dans lequel on va enreigistrer les elements si bien des anagrammes
    
    
    if (typeof words === 'string'){
        words = arguments; // on transforme le string temporerement en tableau car il ne tri que des tableaux
    }
    
    var t = words.length; //nombres d'éléments dans matches
    for (i; i < t; i++) {
        var wordTemp = words[i];
        var drows = this.tri(wordTemp);//wordTemp.split('').sort().join('').trim().toLowerCase(); //les elements traités

        if (drows === drow && this.word.toUpperCase() != wordTemp.toUpperCase()) {
            //c'est un anagramme
            matches.push(wordTemp);
            
            console.log(matches);
        }    
    } 
    
    return matches;

}