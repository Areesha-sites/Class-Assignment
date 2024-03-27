// CLASS EXAMPLE.
// Let's create a variable to store the name of a fruit.
let fruitname: string = "Mango";
console.log(fruitname); // output: Mango

// Let's create a function.
function logFruitName(): void {
  let fruitname: string = "Grapes";
  console.log(fruitname); // function body
}
logFruitName(); // calling the function

// Let's create another function.
let carName = "Toyota";
function logCarName() {
  console.log(carName); // output: toyota
}
logCarName();
// MY EXAMPLE.
// Let's create a function to log names of various items.
function logSomeName(
  fruitName: string,
  carName: string,
  chocolateName: string,
  snackName: string,
  colorName: string
) {
  console.log(fruitName, carName, chocolateName, snackName, colorName);
}
logSomeName("Mango,", "BMW,", "dairyMilk,", "kurkure,", "black"); // calling the function with arguments.

// Let's create a function to make a half-fried egg recipe.
// Ingredients: 1 egg, 1.5 tbsp butter, 2 pinches of salt
function halfFry(salt: number = 1, butter: number = 3) {
  let cooked: number = salt + butter + 1; // Adding salt, butter, and 1 more for cooking
  return cooked; // Returning the total cooked value
}
// ordering my half-fried egg.
let myOrder: number = halfFry(2, 1.5); // my egg
console.log(myOrder); // Output: 4.5

// Ordering for my friend
let myFriendOrder: number = halfFry(3, 5); // Output: 9
console.log(myFriendOrder);

// Ordering with customized ingredients
console.log(halfFry(2, 0)); // Output: 3 (no butter)
console.log(halfFry(0, 3)); // Output: 4 (no salt)

// MY PRACTISE.
// Let's create a function to make a peanut butter and jelly sandwich.
// Ingredients: 2 slices of bread, peanut butter, jelly
function makePBJSandwich(breadSlices: number = 2) {
  let sandwich: string = "Delicious peanut butter and jelly sandwich with ";
  sandwich += breadSlices + " slice(s) of bread, peanut butter, and jelly.";
  return sandwich; // Returning the prepared sandwich
}
// Ordering my favorite peanut butter and jelly sandwich
let mySandwich: string = makePBJSandwich(2); // my sandwich
console.log(mySandwich);
// Ordering a peanut butter sandwich for my friend
let friendSandwich: string = makePBJSandwich(2); // friend's sandwich
console.log(friendSandwich);
