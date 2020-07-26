"use strict";
function validateCreditCard(num) {
  let summedDigits = 0;
  let stringNum = num.toString();
  for (let i = 0; i < stringNum.length; i++) {
    summedDigits += parseInt(stringNum.charAt(i));
  }

  if (
    typeof num == "number" &&
    num.toString().length == 16 &&
    summedDigits > 16 &&
    (num % 10) % 2 == 0
  ) {
    return "success!";
  } else {
    return "invalid";
  }
}
console.log(validateCreditCard());
