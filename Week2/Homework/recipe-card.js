"use strict";
let myRecipe = {};
myRecipe.title = "Sandwich";
myRecipe.servings = 1;
myRecipe.ingredients = [
  "2 pieces of bread",
  "stuff in between",
  "cheese....always",
];
for (let i = 0; i < Object.keys(myRecipe).length; i++) {
  console.log(Object.keys(myRecipe)[i] + " " + Object.values(myRecipe)[i]);
}
