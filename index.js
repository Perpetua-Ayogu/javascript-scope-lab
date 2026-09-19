// Global scope
const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake";


// Function
function addBurger() {

  // Function-scoped variable
  var newBurger = "Flatburger";

  burgers.push(newBurger);


  // Block scope
  if (true) {

    const anotherNewBurger = "Maple Bacon Burger";

    burgers.push(anotherNewBurger);
  }
}


// Function that changes the global drink
function changeFeaturedDrink() {

  featuredDrink = "The JavaShake";
}