"use strict";
var a = "string1";
var b = "string2";
var c = {};
var d = {};
function typeComparison(arg1, arg2) {
  let type1 = typeof arg1;
  let type2 = typeof arg2;
  let result;
  if (type1 === type2) {
    return "Same type";
  } else {
    return "Not the same";
  }
}

console.log("a & b are " + typeComparison(a, b));
console.log("a & c are " + typeComparison(a, c));
console.log("a & d are " + typeComparison(a, d));
console.log("b & c are " + typeComparison(b, c));
console.log("b & d are " + typeComparison(b, d));
console.log("c & d are " + typeComparison(c, d));
