'use strict';

function find_element_first_subscript(collection, element) {
  var result = collection.reduce(function(sum, currVal, index) {
    if (index === sum && currVal != element) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);
  return result; 
}

module.exports = find_element_first_subscript;

