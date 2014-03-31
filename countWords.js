'use strict';



module.exports = function countWords(inputWords) {
	return inputWords.reduce(function (d, word) {
		d[word] = d[word] !== undefined ? d[word] + 1 : 1;

		return d;
	}, {});
};