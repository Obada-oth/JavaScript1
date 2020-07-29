"use strict";
function validateCreditCard(num) {
  let summedDigits = 0;
  let stringNum = num.toString();
  for (let i = 0; i < stringNum.length; i++) {
    summedDigits += parseInt(stringNum.charAt(i));
  }

  if (
    !isNaN(num) &&
    stringNum.length == 16 &&
    summedDigits > 16 &&
    (num % 10) % 2 == 0
  ) {
    return "success!";
  } else {
    return "invalidoo";
  }
}

console.log(validateCreditCard("1111111111166001"));
