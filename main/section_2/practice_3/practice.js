function count_same_elements(collection) {
  var result = collection.reduce(function (counted, currStr) {
    var newObj = {};
    var nameArray = counted.map(function (element) {
      return element.name;
    })
    var currVal = currStr.match(/\w/).toString();
    if (!nameArray.includes(currVal)) {
      newObj.name = currVal;
      if (currStr.match(/\d/)) {
        newObj.summary = parseInt(currStr.match(/\d/));
      } else {
        newObj.summary = 1;
      }
      counted.push(newObj)
    } else {
      for (var i = 0; i < counted.length; i++) {
        if (counted[i].name === currVal) {
          if (currStr.match(/\d/)) {
            counted[i].summary += parseInt((currStr.match(/\d/g)).join(""));
          } else {
            counted[i].summary++;
          }
        }
      }
    }
    return counted;
  }, []);
  return result;
}

module.exports = count_same_elements;
