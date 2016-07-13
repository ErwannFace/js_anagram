'use strict';

function Anagram(word) { this.word = word; }

Anagram.prototype.matches = function (words) {
	// if arguments are given as strings, parse them in an array
	if (typeof words == 'string') { words = arguments; }
	// create an empty array to store the matching words
	var anagramsList = [];
	// count each letter occurrence in the reference word
	var tableRef = this.countChar(this.word);
	// count each letter occurrence in each tested word
	for (var i = 0; i < words.length; i++) {
		// test that both words are different && test that both words contain the same number of occurrence of each letter
		if (this.word.toLowerCase() !== words[i].toLowerCase() && this.compareTables(tableRef,this.countChar(words[i]))) {
			// add the tested word to the result array (if matching the reference word)
			anagramsList.push(words[i]);
		}
	}
	// return the array containing the matching words
	return anagramsList;
}

// count the number of occurrence of each letter in the string given in argument
Anagram.prototype.countChar = function (str) {
	// create an empty table to store the number of occurence of each letter in the given word
	var table = [];
	// walk through the word, looking at each letter in turn
	for (var i = 0; i < str.length; i++) {
		// set the table index to the current letter
		var index = str.charAt(i).toLowerCase();
		// add 1 to the number of occurrence of the current letter (create the entry if needed)
		table[index] = (table[index])?table[index]+1:1;
	}
	// return the table listing the number of occurrence of each letter
	return table;
}

// check that both tables given in arguments have the same content
Anagram.prototype.compareTables = function (table1,table2) {
	// check that the second word contain all letters from the first, in the same number of occurrence
	for (var x in table1) {	if (! table2[x] || table1[x] !== table2[x]) { return false; } }
	// check that the second word does not include any letter not included in the first
	for (var x in table2) {	if (! table1[x]) { return false; } }
	// return 'true' if both previous checks are passed
	return true;
}
