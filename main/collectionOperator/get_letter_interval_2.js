'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      result.push(numToLetter(i));
    }
  } else {
    for (var i = number_a; i >= number_b; i--) {
      result.push(numToLetter(i));
    }
  }
  return result;
}

 function numToLetter(n) {
  var quotient = Math.floor((n - 1) / 26);
  var remainder = (n - 1) % 26;
  if (quotient === 0) {
    return String.fromCharCode(remainder + 97);
  } else {
    return numToLetter(quotient) + String.fromCharCode(remainder + 97);
  }
}


module.exports = get_letter_interval_2;


