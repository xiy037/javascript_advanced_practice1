'use strict';

function average_to_letter(collection) {
  var average = collection.reduce(function(avg, element, index) {
    return (avg * index + element) / (index + 1);
  });
  var result = String.fromCharCode(Math.ceil(average) + 96);
  return result;
}

module.exports = average_to_letter;

