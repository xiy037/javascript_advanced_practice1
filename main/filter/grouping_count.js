'use strict';

function grouping_count(collection) {
  var result = {};
  var filtered = filterNoRepeatNum(collection);
  for (var i = 0; i < filtered.length; i++) {
    result[filtered[i]] = 0;
  }
  for (var j = 0; j < collection.length; j++) {
    if (filtered.includes(collection[j])) {
    result[collection[j]] = result[collection[j]] + 1;
    }
  }
  return result;
}

function filterNoRepeatNum(array) {
  return array.filter(function(element, index, self){
    return self.indexOf(element) === index;
  });
}

module.exports = grouping_count;
