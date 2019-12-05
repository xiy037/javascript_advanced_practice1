'use strict';

function collect_min_number(collection) {
  return collection.reduce(function(prev, curr) {
    if (prev > curr) {
      return prev = curr;
    }
    return prev;
  });
}

module.exports = collect_min_number;

