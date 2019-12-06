'use strict';

function compute_median(collection) {
  var result;
  var sortedArray = collection.sort(function (a, b) { return a - b });
  var len = sortedArray.length;
  if (len % 2 === 0) {
    result = (sortedArray[len / 2 - 1] + sortedArray[len / 2]) / 2;
  } else {
    result = sortedArray[(len - 1) / 2];
  }
  return result;
}

module.exports = compute_median;


