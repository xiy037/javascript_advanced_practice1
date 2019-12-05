'use strict';
var number_map_to_word_over_26 = function(collection) {
  return collection.map(to_string);
};

function to_string(num) {
  if (num < 27) {
    return String.fromCharCode(num + 96);
  } else {
    var char1 = String.fromCharCode(Math.floor(num / 27) + 96);
    var char2 = String.fromCharCode((num - 1) % 26 + 97);
    return char1.concat(char2);
  }
}

module.exports = number_map_to_word_over_26;
