'use strict';

function collect_min_number(collection) {
  var result = collection.reduce(function(smaller, element) {
    return smaller = Math.min(smaller, element);
  });
  return result;
}

module.exports = collect_min_number;

