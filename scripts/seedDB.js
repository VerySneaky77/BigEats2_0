const mongoose = require("mongoose");

//Load User model
const Item = require("../models/menuItem");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/restaurant");

const itemsSeed = [
  {
    name: "Cheese Burger",
    ingredients: "Lettuce, onion, sesame seed bun, beef patty",
    description: "A classic sandwich favorite, customized to order.",
    price : 8.0,
    categories : "Sandwich"
  },
  {
    name: "Doble Burger",
    ingredients: "Meat, onion, sesame seed bun, beef patty",
    description: "A dobble delicious burger favorite, customized to order.",
    price : 8.0,
    categories : "Sandwich"
  },
  {
    name: "Steak",
    ingredients: "3/4 roasbeef sesame seed bun, beef patty",
    description: "8 oz of your favorite, customized to order.",
    price : 8.0,
    categories : "Platter"
  },
  {
    name: "Pizza",
    ingredients: "Delicious cheese pizza with thin crust.",
    description: "A classic cheese pizza, customized to order.",
    price : 8.0,
    categories : "Pizza"
  },
  {
    name: "Hotdog",
    ingredients: "Beef sausage, onion, regular bun",
    description: "A classic hotdog favorite, customized to order.",
    price : 8.0,
    categories : "Sandwich"
  },
];

Item.remove({})
  .then(() => Item.collection.insertMany(itemsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });