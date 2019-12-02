'use strict';

function find_first_even(collection) {
var result = collection.reduce(function(even, element) {
  if (element % 2 != 0 || even % 2 === 0) {
    return even;
  } else {
    return element;
  }
}, 1);
return result;
}

module.exports = find_first_even;

