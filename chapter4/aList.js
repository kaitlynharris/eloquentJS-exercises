function arrayToList(array) {
  var list = {value: array[array.length-1], rest: null};
  for (var i = array.length - 2; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  list = {value: element, rest: list};
  return list;
}

function nth(list, n) {
  var node = list;
  if (n == 0) {
    return node.value;
  } else {
    node = node.rest;
    n--;
    return nth(node, n);
  }
}
