'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      result.push(convert_to_string(i));
    }
  } else {
    for (var i = number_a; i >= number_b; i--) {
      result.push(convert_to_string(i));
    }
  }
  return result;
}

function convert_to_string(num) {
  var char1, char2, string;
  if (num <= 26) {
    string = String.fromCharCode(num + 96);
  } else {
    char1 = String.fromCharCode(Math.floor((num-1)/26) + 96);
    char2 = String.fromCharCode((num-1) % 26 + 97);
    string = char1 + char2;
  }
  return string;
}
module.exports = get_letter_interval_2;

