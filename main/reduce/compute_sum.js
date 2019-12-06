'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function (prev, curr) {
    return prev += curr;
  });
}

module.exports = calculate_elements_sum;

