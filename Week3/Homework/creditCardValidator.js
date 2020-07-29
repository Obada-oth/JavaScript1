"use strict";
function validateCreditCard(num) {
  let summedDigits = 0;
  let stringNum = num.toString();
  let frequency = stringNum.split(stringNum[0]).length - 1;

  for (let i = 0; i < stringNum.length; i++) {
    summedDigits += parseInt(stringNum.charAt(i));
  }

  if (
    !isNaN(num) &&
    stringNum.length == 16 &&
    summedDigits > 16 &&
    (num % 10) % 2 == 0 &&
    frequency < 16
  ) {
    return `success! The input ${num} is a valid credit card number`;
  } else if (isNaN(num)) {
    return `Invalid! The input ${num} must contain only numbers`;
  } else if (stringNum.length !== 16) {
    return `Invalid! The input ${num} must be 16 digits long`;
  } else if (summedDigits <= 16) {
    return `Invalid! The sum of all digits in ${num} must be greater than 16`;
  } else if ((num % 10) % 2 !== 0) {
    return `Invalid! The last digit in ${num} must be an even number. `;
  } else if (frequency >= 16) {
    return `Invalid! The input ${num} must contain at least two different numbers`;
  }
}

console.log(validateCreditCard("2222222222222224"));
