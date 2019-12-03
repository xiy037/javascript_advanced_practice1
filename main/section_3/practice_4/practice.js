function create_updated_collection(collection_a, object_b) {
  var array_c = collection_a.reduce(function(collection_c, currVal){
    var keyArray = collection_c.map(function(element){
      return element.key;
    });
    if (!keyArray.includes(currVal)) {
      createNewObj(collection_c, currVal);
    } else {
      increaseCount(collection_c, currVal);
    }
    return collection_c;
  }, []);
  var result = array_c.map(function(obj) {
    if (object_b.value.includes(obj.key)) {
      obj.count -= Math.floor(obj.count / 3);
    }
    return obj;
  });
  return result;
}

function createNewObj(array, item) {
  var newObj ={};
  if (item.includes("-")) {
    var splitted = item.split("-");
    newObj.key = splitted[0];
    newObj.count = parseInt(splitted[1]);
  } else {
  newObj.key = item;
  newObj.count = 1;
  }
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
