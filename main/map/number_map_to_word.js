'use strict';
var number_map_to_word = function(collection){
  var result = collection.map(function(element){
    return String.fromCharCode(element + 96);
  });
  return result;
};

module.exports = number_map_to_word;
