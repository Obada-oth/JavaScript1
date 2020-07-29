"use strict";

function calculateDogAge(ageInHumanYears) {
  /*This function returns dog's age based on human years */
  let ageInDogYears = ageInHumanYears * 7;
  return `Your doggie is ${ageInDogYears} years old in dog years`;
}

console.log(calculateDogAge(1));
console.log(calculateDogAge(3));
console.log(calculateDogAge(7));
