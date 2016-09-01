var ingredients = ["eggs", "milk", "flour", "suger", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop:

console.log("\nBEHOLD! The dankest of banana bread recipes..\n");
var i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i++])
}

// Write a for loop:

console.log("\nBEHOLD! The dankest of banana bread recipes..\n");

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write either loop to list in reverse:

console.log("\nBEHOLD! The dankest of banana bread recipes.. IN REVERSE!!!\n");

var i = ingredients.length;

while (i--) {
  console.log(ingredients[i])
}
