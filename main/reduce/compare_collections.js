'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce(function (prev, element, index) {
    return prev && element === collection_b[index];
  });
}

module.exports = compare_collections;


