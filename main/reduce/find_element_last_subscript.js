'use strict';

function find_element_last_subscript(collection, element) {
  return collection.reduceRight(function (prev, curr, index) {
    if (index === prev && curr !== element) {
      return prev - 1;
    } else {
      return prev;
    }
  }, collection.length - 1);
}

module.exports = find_element_last_subscript;
