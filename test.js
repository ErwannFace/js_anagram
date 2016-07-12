function sortstr(x) {
	 return x.split("").sort().join("").toLowerCase();
}


function anagram(word, arraytocompare) {
	var anagrams = [];
	for (var i=0; i<arraytocompare.length; i++) {
		if (sortstr(arraytocompare[i]) == sortstr(word) && arraytocompare[i].toLowerCase() != word.toLowerCase()) {
			anagrams.push(arraytocompare[i]);
		}
	}	
	alert("Liste des anagrammes : " + anagrams);
}

var word = prompt("Entrez ze mot");
var compare = prompt("Entrez les mots à comparer au format mot1, mot2, mot3, etc.");
var compare = compare.split(", ");
anagram(word,compare);