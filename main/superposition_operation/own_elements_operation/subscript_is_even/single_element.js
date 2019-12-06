'use strict';
var single_element = function (collection) {
  var evenPositionArr = collection.filter(function (element, index) {
    return index % 2 === 1;
  });
  return evenPositionArr.filter(function (element, index, self) {
    return self.indexOf(element) === self.lastIndexOf(element);
  })
};

module.exports = single_element;
