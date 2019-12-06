function collect_same_elements(collection_a, collection_b) {
  var flat_b = flattenCollection(collection_b);
  return collection_a.filter(function (element) {
    return flat_b.includes(element);
  });
}

function flattenCollection(array) {
  var flatArray = array.flat();
  if (checkArrayFlat(flatArray)) {
    return flatArray;
  }
  return flattenCollection(flatArray);
}

function checkArrayFlat(array) {
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      return false;
    }
  }
  return true;
}
module.exports = collect_same_elements;
