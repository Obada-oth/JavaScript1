//pushing array's element into another array
"use strict";
const drinkTypes = ["cola", "lemonade", "water"];
let drinkTray = [];
for (let i = 0; i < 5; i++) {
  if (drinkTray.length <= 1) {
    drinkTray.push(drinkTypes[0]);
  } else if (drinkTray.length >= 2 && drinkTray.length <= 3) {
    drinkTray.push(drinkTypes[1]);
  } else {
    drinkTray.push(drinkTypes[2]);
  }
  console.log("Hey guys! I brought " + drinkTray);
}
