'use strict';

function hybrid_operation_to_uneven(collection) {
  var oddArray = collection.filter(function (element) {
    return element % 2 === 1;
  });
  var result = oddArray.reduce(function(sum, element) {
    return sum + element * 3 + 5;
  }, 0);
  return result;
}

module.exports = hybrid_operation_to_uneven;

