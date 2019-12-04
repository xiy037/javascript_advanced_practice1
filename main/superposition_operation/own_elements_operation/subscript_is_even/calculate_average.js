'use strict';
var calculate_average = function(collection){
  var evenPosition = collection.filter(function(element, index) {
    return index % 2 === 1;
  });
  var result = evenPosition.reduce(function(avg, element, index) {
    return (avg * index + element) / (index + 1);
  });
  return result;
};
module.exports = calculate_average;
