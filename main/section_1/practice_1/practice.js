function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(function (element) {
    return collection_b.includes(element);
  });
}

module.exports = collect_same_elements;
