'use strict';
var calculate_median = function (collection) {
  var evenPosition = collection.filter(function (element, index) {
    return index % 2 === 1;
  });
  var len = evenPosition.length;
  var result;
  if (len % 2 === 0) {
    result = (evenPosition[len / 2 - 1] + evenPosition[len / 2]) / 2;
  } else {
    result = evenPosition[(len - 1) / 2];
  }
  return result;
};
module.exports = calculate_median;
