function create_updated_collection(collection_a, object_b) {
  var result = collection_a.map(function (element) {
    if (object_b.value.includes(element.key)) {
      element.count = element.count - 1;
      return element;
    } else {
      return element;
    }
  });
  return result;
}

module.exports = create_updated_collection;
