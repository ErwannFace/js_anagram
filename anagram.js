//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (words) {
	if (typeof words == 'string') { words = arguments; }
	var anagramsList = [];
	var tableRef = this.countChar(this.word)
	for (var i = 0; i < words.length; i++) {
		if (this.word.toLowerCase() !== words[i].toLowerCase()) {
			var tableWord = this.countChar(words[i]);
			if (this.compareTables(tableRef,tableWord)) { anagramsList.push(words[i]); }
		}
	}
	return anagramsList;
}

Anagram.prototype.countChar = function (str) {
	var table = [];
	for (var i = 0; i < str.length; i++) {
		var index = str.charAt(i).toLowerCase();
		table[index] = (table[index])?table[index]+1:1;
	}
	return table;
}

Anagram.prototype.compareTables = function (table1,table2) {
	for (var x in table1) {
		if (! table2[x] || table1[x] !== table2[x]) { return false; }
	}
	for (var x in table2) {
		if (! table1[x] || table2[x] !== table1[x]) { return false; }
	}
	return true;
}
