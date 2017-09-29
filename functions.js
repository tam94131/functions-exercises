// TODO: add your solutions here!

function concat(a,b) {
	return a+b;
}

function repeatPhrase(phrase,times) {
	for (j=0; j<times; j++) {
		console.log(phrase);
	}
}

function powerFunction(b,e) {
	return b ** e;
}

function areaCircle(radius) {
	return Math.PI * radius ** 2;
}

function pythag(a,b) {
	return Math.sqrt(a**2 + b**2);
}

function isDivisible(x,y) {
	return (x/y)%2===0 ? true : false;
}

function vowelCount(word) {
	var count = 0;
	var vowels = "aeiouy";

	for (var j=0; j<vowels.length; j++) {
		for (var i=0; i<word.length; i++) {
			if (vowels.charAt(j)===word.charAt(i)) {
				count++
			}
		}
		// console.log("The vowel is " + vowels.charAt(j) + " and count is " + count);
	}
	return count;
}

function haveWdi(arrcoll) {
	var success = false;

	for (var i=0; i<arrcoll.length; i++) {
		if (arrcoll[i]==="wdi") {
			success = true;
		}
	}
	return success;
}

function longestWord(sentence) {
	var words = [];
	var longest = 0, longestIndex; 

	words = sentence.split(" ");
	for (j=0; j<words.length; j++) {
		if (words[j].length>longest) {
			longest = words[j].length;
			longestIndex = j; 
		}
	}
	return words[longestIndex];
}
