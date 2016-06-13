var ANCESTRY_FILE = require('./ancestry.js');
var arrays = [[1, 2, 3], [4, 5], [6]];
var ancestry = JSON.parse(ANCESTRY_FILE);

// flattening

function arrayBuilder(arrayInProgress, currentArray) {
  return arrayInProgress.concat(currentArray);
}
function flatten(array) {
  return array.reduce(arrayBuilder)
}

var flatArray = flatten(arrays);
console.log(flatArray);

// mother-daughter age difference

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasMother(person) { return byName.hasOwnProperty(person.mother); }
function ageDifference(person) { return person.born - byName[person.mother].born; }

console.log(average(ancestry.filter(hasMother).map(ageDifference)));

// historical life expectancy

function byCentury(person) { return Math.ceil(person.died / 100); }

function groupBy(array, group) {
  var grouped = {};
  array.forEach( function(person){
    category = group(person);
    if (grouped.hasOwnProperty(category)) {
      grouped[category].push(person);
    } else {
      grouped[category] = [];
      grouped[category].push(person);
    }
  })
  return grouped;
}

function ageOfDeath(person) { return person.died - person.born; }

var ancestorsByCentury = groupBy(ancestry, byCentury);

for (var century in ancestorsByCentury) {
  console.log(century, ":", average(ancestorsByCentury[century].map(ageOfDeath)));
}

// every and then some

function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i])) { return false; }
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) { return true; }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
