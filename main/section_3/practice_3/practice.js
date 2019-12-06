function create_updated_collection(collection_a, object_b) {
  var array_c = createArrayC(collection_a);
  var result = array_c.map(function (obj) {
    if (object_b.value.includes(obj.key)) {
      obj.count -= Math.floor(obj.count / 3);
    }
    return obj;
  });
  return result;
}
function createArrayC(array) {
  return array.reduce(function (prev, currVal) {
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
}

function createNewObj(array, item) {
  var newObj = {};
  newObj.key = item;
  newObj.count = 1;
  return array.push(newObj);
}

function increaseCount(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].key === item) {
      array[i].count = array[i].count + 1;
    }
  }
  return array;
}

module.exports = create_updated_collection;
