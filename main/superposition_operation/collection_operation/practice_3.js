'use strict';

function hybrid_operation_to_uneven(collection) {
  var oddArray = collection.filter(function (element) {
    return element % 2 === 1;
  });
  return oddArray.reduce(function(prev, element) {
    return prev + element * 3 + 5;
  }, 0);
}

module.exports = hybrid_operation_to_uneven;

