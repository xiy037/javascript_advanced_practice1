'use strict';
function map_to_even(collection) {
  return collection.map(function (element) {
    return element * 2;
  });
}
module.exports = map_to_even;
