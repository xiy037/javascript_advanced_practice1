'use strict';
//备注部分是不知道是多少维数组的时候，一直抠到最底层。
function double_to_one(collection) {
  var result = collection.flat();
  if (!check_array(result)) {
    return result;
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
