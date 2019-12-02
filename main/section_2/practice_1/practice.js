function count_same_elements(collection) {
  var result = collection.reduce(function(counted, currVal){
    var newObj = {};
    var keyArray = counted.map(function(element) {
      return element.key;
    }) 
    if (!keyArray.includes(currVal)) {
      newObj.key = currVal;
      newObj.count = 1;
      counted.push(newObj)
    } else {
      for (var i = 0; i < counted.length; i++) {
        if (counted[i].key === currVal) {
          counted[i].count++;
        } 
      }
    }
    return counted;
  },[]);
  return result;
}

module.exports = count_same_elements;
