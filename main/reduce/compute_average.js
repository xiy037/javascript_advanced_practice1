'use strict';

function compute_average(collection) {
  var result = collection.reduce(function(average, element, index) {
    return average = (average * index + element) / (index + 1);
  });
  return result;
}

module.exports = compute_average;

