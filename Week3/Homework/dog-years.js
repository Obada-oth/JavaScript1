"use strict";

function calculateDogAge(ageInHumanYears) {
  /*This function returns dog's age based on human years */
  let ageInDogYears = ageInHumanYears * 7;
  return ageInDogYears;
}

console.log(
  `Your doggie is ${calculateDogAge(1)} years old in dog years!`
); /*Your doggie is 7 years old in dog years! */
console.log(
  `Your doggie is ${calculateDogAge(2)} years old in dog years!`
); /*Your doggie is 14 years old in dog years! */
console.log(
  `Your doggie is ${calculateDogAge(3)} years old in dog years!`
); /*Your doggie is 21 years old in dog years! */
