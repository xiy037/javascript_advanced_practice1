'use strict';

function grouping_count(collection) {
  var result = {};
  var filtered = collection.filter(function(element, index, self){
    return self.indexOf(element) === index;
  });
  for (var i = 0; i < filtered.length; i++) {
    var counter = 0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[j] === filtered[i]) {
        counter++;
      }
    }
    Object.defineProperty(result, filtered[i].toString(), {value:counter});
  }
  return result;
}

module.exports = grouping_count;
