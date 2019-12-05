'use strict';
var calculate_average = function(collection){
  var evenPosition = collection.filter(function(element, index) {
    return index % 2 === 1;
  });
  return evenPosition.reduce(function(prev, curr, index) {
    return (prev * index + curr) / (index + 1);
  });
};
module.exports = calculate_average;
