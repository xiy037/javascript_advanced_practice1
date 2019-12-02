'use strict';

function find_element_last_subscript(collection, element) {
  var result = collection.reduceRight(function(pos, currVal, index) {
    if (index === pos && currVal != element) {
      return pos - 1;
    } else {
      return pos;
    }
  }, collection.length-1);
  return result; 
}

module.exports = find_element_last_subscript;
