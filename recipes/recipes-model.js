const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  // return a list of all ingredients and quantities for a given recipe
  return db
    .select("ingredients.name", "recipe_ingredients.quantity")
    .from("recipe_ingredients")
    .join(
      "ingredients",
      "ingredients.id",
      "=",
      "recipe_ingredients.ingredients_id"
    )
    .join("recipes", "recipe_ingredients.recipes_id", "=", "recipes.id")
    .where({ "recipes.id": id });
}

function getInstructions(id) {
  // return a list of step by step instructions for preparing a recipe
  return db("recipes");
}
