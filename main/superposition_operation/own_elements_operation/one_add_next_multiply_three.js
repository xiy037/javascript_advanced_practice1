'use strict';
function one_add_next_multiply_three(collection) {
  var tempArr = collection.map(function (element, index, self) {
    if (index < self.length - 1) {
      return (element + self[index + 1]) * 3;
    }
    return element;
  });
  tempArr.pop();
  return tempArr;
}

module.exports = one_add_next_multiply_three;
