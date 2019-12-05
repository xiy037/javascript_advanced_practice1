function collect_same_elements(collection_a, object_b) {
  var valueArray = object_b.value;
  return collection_a.filter(function(element) {
    return valueArray.includes(element);
  });
}

module.exports = collect_same_elements;
