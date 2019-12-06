'use strict';
var map_to_three_multiples = function (collections) {
  return collections.map(function (element) {
    return element * 3;
  });
};

module.exports = map_to_three_multiples;
