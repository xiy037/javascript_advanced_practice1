'use strict';

function average_to_letter(collection) {
  var average = collection.reduce(function(avg, element, index) {
    return (avg * index + element) / (index + 1);
  });
  return String.fromCharCode(Math.ceil(average) + 96);
}

module.exports = average_to_letter;

