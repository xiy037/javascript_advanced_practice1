'use strict';

function median_to_letter(collection) {
  var sorted = collection.sort();
  var median;
  var len = sorted.length;
  if (len % 2 === 0) {
    median = (sorted[len / 2 - 1] + sorted[len / 2]) / 2;
  } else {
    median = sorted[(len - 1) / 2];
  }
  var num = Math.ceil(median);
  return numToLetter(num);
}

function numToLetter(n) {
  var quotient = Math.floor((n - 1) / 26);
  var remainder = (n - 1) % 26;
  if (quotient === 0) {
    return String.fromCharCode(remainder + 97);
  } else {
    return numToLetter(quotient) + String.fromCharCode(remainder + 97);
  }
}
module.exports = median_to_letter;
