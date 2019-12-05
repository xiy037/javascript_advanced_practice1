function count_same_elements(collection) {
  var result = collection.reduce(function (prev, currVal) {
    var keyArray = prev.map(function (element) {
      return element.key;
    });
    if (!keyArray.includes(currVal)) {
      createNewObj(prev, currVal);
    } else {
      increaseCount(prev, currVal);
    }
    return prev;
  }, []);
  return result;
}

function createNewObj(array, item) {
  var newObj = {};
  newObj.key = item;
  newObj.count = 1;
  array.push(newObj);
  return array;
}

function increaseCount(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].key === item) {
      return arr[i].count++;
    }
  }
}

module.exports = count_same_elements;
