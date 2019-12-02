'use strict';

function calculate_elements_sum(collection) {
  var result = collection.reduce(function(sum, currentVal) { 
    return sum += currentVal;
  });
  return result;
}

module.exports = calculate_elements_sum;

