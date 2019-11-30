'use strict';

function double_to_one(collection) {
  var result = collection.flat();
  result = result.filter(function(element, index, self) {
    return self.indexOf(element) === index;
  });
  return result;
}

module.exports = double_to_one;
