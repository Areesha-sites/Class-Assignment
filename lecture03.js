// CLASS EXAMPLE.
// Let's create a variable to store the name of a fruit.
var fruitname = "Mango";
console.log(fruitname); // output: Mango
// Let's create a function.
function logFruitName() {
    var fruitname = "Grapes";
    console.log(fruitname); // function body
}
logFruitName(); // calling the function
// Let's create another function.
var carName = "Toyota";
function logCarName() {
    console.log(carName); // output: toyota
}
logCarName();
// MY EXAMPLE.
// Let's create a function to log names of various items.
function logSomeName(fruitName, carName, chocolateName, snackName, colorName) {
    console.log(fruitName, carName, chocolateName, snackName, colorName);
}
logSomeName("Mango,", "BMW,", "dairyMilk,", "kurkure,", "black"); // calling the function with arguments.
// Let's create a function to make a half-fried egg recipe.
// Ingredients: 1 egg, 1.5 tbsp butter, 2 pinches of salt
function halfFry(salt, butter) {
    if (salt === void 0) { salt = 1; }
    if (butter === void 0) { butter = 3; }
    var cooked = salt + butter + 1; // Adding salt, butter, and 1 more for cooking
    return cooked; // Returning the total cooked value
}
// ordering my half-fried egg.
var myOrder = halfFry(2, 1.5); // my egg
console.log(myOrder); // Output: 4.5
// Ordering for my friend
var myFriendOrder = halfFry(3, 5); // Output: 9
console.log(myFriendOrder);
// Ordering with customized ingredients
console.log(halfFry(2, 0)); // Output: 3 (no butter)
console.log(halfFry(0, 3)); // Output: 4 (no salt)
// MY PRACTISE.
// Let's create a function to make a peanut butter and jelly sandwich.
// Ingredients: 2 slices of bread, peanut butter, jelly
function makePBJSandwich(breadSlices) {
    if (breadSlices === void 0) { breadSlices = 2; }
    var sandwich = "Delicious peanut butter and jelly sandwich with ";
    sandwich += breadSlices + " slice(s) of bread, peanut butter, and jelly.";
    return sandwich; // Returning the prepared sandwich
}
// Ordering my favorite peanut butter and jelly sandwich
var mySandwich = makePBJSandwich(2); // my sandwich
console.log(mySandwich);
// Ordering a peanut butter sandwich for my friend
var friendSandwich = makePBJSandwich(2); // friend's sandwich
console.log(friendSandwich);
