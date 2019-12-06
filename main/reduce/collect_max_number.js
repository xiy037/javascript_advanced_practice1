'use strict';

function collect_max_number(collection) {
  return collection.reduce(function (prev, curr) {
    if (prev < curr) {
      return prev = curr;
    }
    return prev;
  });
}

module.exports = collect_max_number;
