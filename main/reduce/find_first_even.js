'use strict';

function find_first_even(collection) {
  return collection.reduce(function (prev, curr) {
    if (curr % 2 !== 0 || prev % 2 === 0) {
      return prev;
    }
    return curr;
  });
}

module.exports = find_first_even;

