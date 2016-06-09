var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrayInProgress, currentArray) {
  return arrayInProgress.concat(currentArray);
}
console.log(arrays.reduce(flatten));
