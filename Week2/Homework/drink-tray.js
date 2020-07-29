//pushing array's element into another array
"use strict";
const drinkTypes = ["cola", "lemonad", "water"];
const drinkTray = [];
const count = [0, 0, 0]; /*counts the instances fro each drink type */
let j = 0;

for (let i = 0; i < 5; i++) {
  drinkTray.push(drinkTypes[j]);
  count[j]++; /*push a drink type , then increas the count for that type by 1 */

  if (count[j] == 2) {
    /*When the count is equal to 2 start adding the next drink type */
    j++;
  }
}

console.log(`Hey Guys! I bought a ${drinkTray}!"`);
