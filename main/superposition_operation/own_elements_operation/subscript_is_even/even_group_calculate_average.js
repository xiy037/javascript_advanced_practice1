'use strict';
var even_group_calculate_average = function(collection) {
  var result = [];
  var evenPosition = getEvenPositionItem(collection);
  var evenNum = getEvenNum(evenPosition);
  if (evenNum.length != 0) {
    var lenArray = collectItemLen(evenNum).sort(function(a, b) {return a - b;});
    for (var i = 0; i < lenArray.length; i++) {
      var group = groupByLength(evenNum, lenArray[i]);
      result.push(getAverage(group));
    }
  } else {
    result = [0];
  }
  return result;
};

function getEvenPositionItem(array) {
  return array.filter(function(element, index) {
    return index % 2 === 1;
  });
}

function getEvenNum(array) {
  return array.filter(function(element) {
    return element % 2 === 0;
  });
}

function collectItemLen(array) {
  return array.reduce(function(itemLen, element) {
    var len = getNumLen(element);
    if (!itemLen.includes(len)) {
      itemLen.push(len);
    }
    return itemLen;
  }, []);
}
function groupByLength(array, itemlen) {
  return array.filter(function(element) {
    return getNumLen(element) === itemlen;
  });
}
function getAverage(array) {
  return array.reduce(function(prev, curr, index) {
    return (prev * index + curr) / (index + 1);
  });
}

function getNumLen(n) {
  var quotient = Math.floor(n / 10);
  if (quotient === 0) {
    return 1;
  }
  return getNumLen(quotient) + 1;
}

module.exports = even_group_calculate_average;
