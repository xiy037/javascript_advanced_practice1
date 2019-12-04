'use strict';
var even_group_calculate_average = function(collection){
  var result = [];
  var evenPosition = getEvenPositionItem(collection);
  var evenNum = getEvenNum(evenPosition);
  if (evenNum.length != 0) {
    var lenArray = collectItemLen(evenNum).sort(function(a, b) {return a - b;});
    for (var i = 0; i < lenArray.length; i++) {
      var group = separateGroup(evenNum, lenArray[i]);
      result.push(getAverage(group));
    }
  } else {
    result = [0];
  }
  return result;
};

function getEvenPositionItem(array) {
  var evenPosition = array.filter(function(element, index) {
    return index % 2 === 1;
  });
  return evenPosition;
}
function getEvenNum(array) {
  var evenNum = array.filter(function(element) {
    return element % 2 === 0;
  });
  return evenNum;
}
function collectItemLen(array) {
  return array.reduce(function(itemLen, element) {
    var len = String(element).length;
    if (!itemLen.includes(len)) {
      itemLen.push(len);
    }
    return itemLen;
  }, []);
}
function separateGroup(array, itemlen) {
  var group = array.filter(function(element) {
    return String(element).length === itemlen;
  });
  return group;
}
function getAverage(array) {
  var average = array.reduce(function(avg, element, index) {
    return (avg * index + element) / (index + 1);
  });
  return average;
}

module.exports = even_group_calculate_average;
