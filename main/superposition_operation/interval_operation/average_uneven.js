'use strict';

function average_uneven(collection) {
  var oddArray = collection.filter(function(element) {
    return element % 2 === 1;
  });
  return oddArray.reduce(function(prev, element, index) {
    return (prev * index + element) / (index + 1);
  });
}

module.exports = average_uneven;
