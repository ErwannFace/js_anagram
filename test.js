var wordtocompare = "";
var compare = [];

function sortstr(x) {
	x.split('').sort().join('');
}


function anagram(word, arraytocompare) {
	var sortedword = word.sortstr();
	var sortedarray = [];
	var anagrams = [];
	for (var i=0; i<=arraytocompare.length-1; i++) {
		sortedarray.push(arraytocompare[i].sortstr());
		}
	return sortedarray;
	}

	for (var i=0; i<= sortedarray.length-1; i++) {
		if (sortedarray[i] === sortedword) {
			anagrams.push(sortedarray[i]);
		}
	return anagrams;
	}
	}

}