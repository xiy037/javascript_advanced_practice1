'use strict';
function rank_by_two_large_one_small(collection) {
  var sorted = sortCollection(collection);
  var grouped = groupByThree(sorted);
  var groupArray = Object.values(grouped);
  var orderedArray = orderItems(groupArray);
  return orderedArray.flat();
}

function sortCollection(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}
function groupByThree(array) {
  var groupObj = {};
  for (var i = 0; i < array.length; i++) {
    var qu = Math.floor(i / 3);
    if (i % 3 === 0) {
      groupObj[qu] = [array[i]];
    } else {
      groupObj[qu].push(array[i]);
    }
  }
  return groupObj;
}
function orderItems(array) {
  return array.map(function(element) {
    if (element.length > 2) {
      for (var i = 0; i < element.length - 1; i++) {
        if (element[i] < element[i + 1]) {
          var temp = element[i + 1];
          element[i + 1] = element[i];
          element[i] = temp;
        }
      }
    }
    return element;
  });
}
module.exports = rank_by_two_large_one_small;
