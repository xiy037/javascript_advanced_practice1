'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter(function(element, index, self){
    return self.indexOf(element) === index;
  });
}


module.exports = choose_no_repeat_number;
