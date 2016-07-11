//Regexp golf

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}

// car and cat  /ca[tr]/
// pop and prop  /pr?op/
// ferret, ferry, and ferrari  /ferr(et|y|ari)/
// Any word ending in ious  /\w+ious\b/
// A whitespace character followed by a dot, comma, colon, or semicolon  /\s[.,:;]/
// A word longer than six letters  /\b\w{7,}\b/
// A word without the letter e  /\b[a-df-z]+?\b/i

verify(/ca[tr]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\w+ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\b\w{7,}\b/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+?\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

// Quoting style

var text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^|\W)'|'($|\W)/g, "$1\"$2"));
// → "I'm the cook," he said, "it's my job."

// Numbers again

// [+-]?\d*.\d*[e]?[+-]?\d*

var number = /^[+-]?(\d+?\.?\d*|\d*\.\d+?)([eE]+?[+-]?\d+?|)$/;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});
