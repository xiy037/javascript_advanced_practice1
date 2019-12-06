'use strict';

function find_element_first_subscript(collection, element) {
  return collection.reduce(function (prev, curr, index) {
    if (index === prev && curr !== element) {
      return prev + 1;
    }
    return prev;
  }, 0);
}

module.exports = find_element_first_subscript;

