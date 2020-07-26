"use strict";
function giveCompliment(Name) {
  let compliments = [
    "awesome, ",
    "great, ",
    "amazing, ",
    "wonderful, ",
    "a genius, ",
    "a star, ",
    "cool, ",
    "fabulous, ",
    "out of complements, ",
    "not a narcissist, ",
  ];
  let randomCompliment =
    compliments[Math.floor(Math.random() * compliments.length)];
  return "You are " + randomCompliment + Name + "!";
}
console.log(giveCompliment("Obada"));
console.log(giveCompliment("Obada"));
console.log(giveCompliment("Obada"));
console.log(giveCompliment("Obada"));
