function count_same_elements(collection) {
  var result = collection.reduce(function (counted, currVal) {
    var keyArray = counted.map(function (element) {
      return element.key;
    })
    if (!keyArray.includes(currVal)) {
      createNewObj(counted, currVal);
    } else {
      increaseCount(counted, currVal);
    }
    return counted;
  }, []);
  return result;
}

function createNewObj(array, item) {
  var newObj = {};
  newObj.key = item.match(/[a-z]/).toString();
  if (item.match(/\d/)) {
    newObj.count = parseInt(item.match(/\d/));
  } else {
    newObj.count = 1;
  }
  return array.push(newObj);
}

function increaseCount(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].key === item) {
      return arr[i].count++;
    }
  }
}

module.exports = count_same_elements;
