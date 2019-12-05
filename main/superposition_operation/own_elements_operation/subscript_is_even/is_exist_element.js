'use strict';
var is_exist_element = function(collection,element) {
  var evenIndexArr = collection.filter(function(item, index) {
    return index % 2 === 0;
  });
  return evenIndexArr.includes(element);
};
module.exports = is_exist_element;
