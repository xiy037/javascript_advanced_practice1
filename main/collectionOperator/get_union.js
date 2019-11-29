'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a;
  for (var i = 0; i < collection_b.length; i++) {
    if (!collection_a.includes(collection_b[i])) {
      result.push(collection_b[i]);
    }
  }
  return result;
}

module.exports = get_union;

