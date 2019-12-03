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
  var result;
  if (num > 26) {
    var char1 = String.fromCharCode(Math.floor(num / 27) + 96);
    var char2 = String.fromCharCode((num - 1) % 26 + 97);
    result = char1 + char2;
  } else {
    result = String.fromCharCode(num + 96);
  }
  return result;
}

module.exports = median_to_letter;
