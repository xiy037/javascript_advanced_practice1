'use strict';

function hybrid_operation(collection) {
  var result = collection.reduce(function (prev, element) {
    return prev + element * 3 + 2;
  }, 0);
  return result;
}

module.exports = hybrid_operation;

