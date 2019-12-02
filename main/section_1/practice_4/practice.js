function collect_same_elements(collection_a, object_b) {
  var array_a = [];
  for (var i = 0; i < collection_a.length; i++) {
    array_a.push(collection_a[i].key);
  }
  var result = array_a.filter(function(element) {
    var counter = 0;
    for (var j = 0; j < object_b["value"].length; j++) {
      if (element === object_b["value"][j]) {
        counter++;
      }
    }
    return counter;
  });
  return result;
}

module.exports = collect_same_elements;
