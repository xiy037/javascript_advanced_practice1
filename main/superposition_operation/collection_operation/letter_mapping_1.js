'use strict';

function even_to_letter(collection) {
  var evenArray = collection.filter(function(element) {
    return element % 2 === 0;
  });
  var result = evenArray.map(function(element) {
    return String.fromCharCode(element + 96);
  });
  return result;
}

module.exports = even_to_letter;
