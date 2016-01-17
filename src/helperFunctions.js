function flattenArraySection(array, index) {
  var arrayRemainder = array.slice(index+1);
  var flattenedArray = [].concat.apply([], arrayRemainder);
  return flattenedArray;
}

function add(a, b) {
    return a + b;
}
