'use strict';

function amount_even(collection) {
  var result = collection.reduce(function(sum, element) {
    if (element % 2 === 0) {
      sum += element;
    }
    return sum;
  }, 0);
  return result;
}

module.exports = amount_even;
