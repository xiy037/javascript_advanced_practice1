'use strict';

function get_letter_interval(number_a, number_b) {
  var result = [];
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      result.push(String.fromCharCode(i + 96));
    }
  } else {
    for (var i = number_a; i >= number_b; i--) {
      result.push(String.fromCharCode(i + 96));
    }
  }
  return result;
}

module.exports = get_letter_interval;
