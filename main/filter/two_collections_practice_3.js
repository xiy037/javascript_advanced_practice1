'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = collection_a.filter(function (element) {
    var counter = 0;
    for (var i = 0; i < collection_b.length; i++) {
      if (element % collection_b[i] === 0) {
        counter++;
      }
    }
    return counter;
  })
  return result;
}

module.exports = choose_divisible_integer;
