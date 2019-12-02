'use strict';

function collect_max_number(collection) {
  var result = collection.reduce(function(larger, element) {
    return larger = Math.max(larger, element);
  });
  return result;
}

module.exports = collect_max_number;
