'use strict';
//备注部分是不知道是多少维数组的时候，一直抠到最底层。
function double_to_one(collection) {
  var result = collection.flat();
 /*  while (check_array(result)) {
    result = result.flat();
  } */
  return result;
}

/* function check_array(myArray) {
  var counter = 0;
  for (var i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] === "object") {
      counter++;
    }  
  }
  return counter;
} */
module.exports = double_to_one;
