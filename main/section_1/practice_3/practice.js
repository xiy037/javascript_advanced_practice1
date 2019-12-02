function collect_same_elements(collection_a, object_b) {
  var result = [];
  var valueArray = object_b["value"];
  result = collection_a.filter(function(element) {
    var counter = 0;
    for (var i = 0; i < valueArray.length; i++) {
      if (element === valueArray[i]) {
        counter++;
      }
    }
    return counter;
  });
  return result;
}

module.exports = collect_same_elements;
