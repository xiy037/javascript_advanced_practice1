'use strict';
//没有研究出用reduce怎么求median。
function compute_chain_median(collection) {
  var result;
  var splitedArray = collection.split("->");
  var sortedArray = splitedArray.sort(function(a, b) {return a - b});
  var len = sortedArray.length;
  if (len % 2 === 0) {
    result = (Number(sortedArray[len / 2 - 1]) + Number(sortedArray[len / 2])) / 2;
  } else {
    result = Number(sortedArray[(len - 1) / 2]);
  }
  return result;
}

module.exports = compute_chain_median;
