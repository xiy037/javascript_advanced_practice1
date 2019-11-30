'use strict';

function choose_no_repeat_number(collection) {
  var result = collection.filter(function(element, index, self){
    return self.indexOf(element) === index;
  });
  return result;
}


module.exports = choose_no_repeat_number;
