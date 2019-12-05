'use strict';

function find_last_even(collection) {
  return collection.reduceRight(function(prev, curr) {
    if (curr % 2 !== 0 || prev % 2 === 0) {
      return prev;
    }
    return curr;
  });
}

module.exports = find_last_even;
