'use strict';

function compare_collections(collection_a, collection_b) {
  var result = collection_a.reduce(function(equal, element, index) {
    return equal = element === collection_b[index];
  });
  return result;
}

module.exports = compare_collections;


