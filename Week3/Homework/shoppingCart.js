"use strict";
const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(groceryItem) {
  /*This function will evaluate the length of [shoppingCart],
  if less than 3 it will add the argument to the end of the array. 
  if it's more than 3 it would add the argument to the end ,
  and remove the first elememt from the array */
  if (shoppingCart.length < 3) {
    shoppingCart.push(groceryItem);
  } else if (shoppingCart.length >= 3) {
    shoppingCart.push(groceryItem);
    shoppingCart.shift();
  }

  console.log(`You bought ${shoppingCart}!`);
}
console.log(addToShoppingCart("chocolate"));
console.log(addToShoppingCart("waffles"));
console.log(addToShoppingCart("tea"));
