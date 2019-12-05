'use strict';

function compute_average(collection) {
  return collection.reduce(function(prev, curr, index) {
    return prev = (prev * index + curr) / (index + 1);
  });
}

module.exports = compute_average;

