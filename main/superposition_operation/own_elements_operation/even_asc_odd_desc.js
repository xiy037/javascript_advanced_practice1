'use strict';
var even_asc_odd_desc = function (collection) {
  var evenArr = filterEven(collection);
  var oddArr = filterOdd(collection);
  var evenAsc = evenArr.sort(function (a, b) {
    return a - b;
  });
  var oddDesc = oddArr.sort(function (a, b) {
    return b - a;
  });
  return evenAsc.concat(oddDesc);
};

function filterEven(array) {
  return array.filter(function (element) {
    return element % 2 === 0;
  });
}
function filterOdd(array) {
  return array.filter(function (element) {
    return element % 2 === 1;
  });
}
module.exports = even_asc_odd_desc;
