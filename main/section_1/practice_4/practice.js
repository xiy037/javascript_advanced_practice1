function collect_same_elements(collection_a, object_b) {
  var array_a = [];
  for (var i = 0; i < collection_a.length; i++) {
    array_a.push(collection_a[i].key);
  }
  return result = array_a.filter(function (element) {
    return object_b.value.includes(element);
  });
}

module.exports = collect_same_elements;
