"use strict";
const cartForParty = {
  beers: 3.35,
  chips: 1.75,
  dips: 2.05,
  Coke: 2.25,
  cheese: 1.85,
};

function calculateTotalPrice(object) {
  let calculateTotalPrice = 0;
  for (let prop in object) {
    /*total price starts at 0,
  the function then loops through the object's properties,
  and add the value of each one to the total */
    calculateTotalPrice += object[prop];
  }
  return calculateTotalPrice.toFixed(
    2
  ); /*toFixed method makes sure the price is rounded to 2 decimals only */
}

console.log(calculateTotalPrice(cartForParty));
