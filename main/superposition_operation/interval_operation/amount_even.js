'use strict';

function amount_even(collection) {
  return collection.reduce(function(prev, element) {
    if (element % 2 === 0) {
      prev += element;
    }
    return prev;
  }, 0);
}

module.exports = amount_even;
