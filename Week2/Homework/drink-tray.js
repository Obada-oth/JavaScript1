//pushing array's element into another array
const drinkTypes = ["cola", "lemonade", "water"];
const drinkTray = [];
const instances = {};
function addToTray(){
for (let i = 0; i <= 5; i++) {

  instances[drinkTray[i]] = (instances[drinkTray[i]] || 0) + 1;
  if (instances[drinkTray[i]])
}

console.log(instances[drinkTray[i]]);
