function collect_same_elements(collection_a, collection_b) {
  var result = collection_a.filter(function(element) {
    var counter = 0;
    for (var i = 0; i < collection_b.length; i++) {
      if (element === collection_b[i]) {
        counter++;
      }
    }
    return counter;
  });
  return result;
}

module.exports = collect_same_elements;
