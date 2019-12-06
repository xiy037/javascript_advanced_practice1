'use strict';

function spilt_to_zero(number, interval) {
  var result = [number];
  var element = number;
  while (element > 0) {
    element = (element * 10 - interval * 10) / 10;
    result.push(element);
  }
  return result;
}

module.exports = spilt_to_zero;
