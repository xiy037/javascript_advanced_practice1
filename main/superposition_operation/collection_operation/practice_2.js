'use strict';

function hybrid_operation_to_uneven(collection) {
  var oddArray = collection.filter(function (element) {
    return element % 2 === 1;
  });
  var result = oddArray.map(function(element) {
    return element * 3 + 2;
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;

