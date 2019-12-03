'use strict';

function average_uneven(collection) {
  var oddArray = collection.filter(function(element) {
    return element % 2 === 1;
  });
  var result = oddArray.reduce(function(avg, element, index) {
    return (avg * index + element) / (index + 1);
  });
  return result;
}

module.exports = average_uneven;
