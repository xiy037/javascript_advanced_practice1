'use strict';

function double_to_one(collection) {
  var result = collection.flat();
  if (!check_array(result)) {
    return result.filter(function (element, index, self) {
      return self.indexOf(element) === index;
    });
  } else {
    return double_to_one(result);
  }
}
function check_array(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (Array.isArray(myArray[i])) {
      return true;
    }
  }
  return false;
}

module.exports = double_to_one;
