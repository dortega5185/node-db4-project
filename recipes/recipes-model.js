const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredients,
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
  return db
    .select("steps.instruction", "steps.step_number")
    .from("steps")
    .join("recipes", "recipes.id", "=", "steps.recipes_id")
    .where({ "recipes.id": id })
    .orderBy("steps.step_number");
}

function getRecipesByIngredients(id) {
  return db
    .select("recipes.name")
    .from("recipes")
    .join(
      "recipe_ingredients",
      "recipe_ingredients.recipes_id",
      "=",
      "recipes.id"
    )
    .join(
      "ingredients",
      "ingredients.id",
      "=",
      "recipe_ingredients.ingredients_id"
    )
    .where({ "ingredients.id": id });
}
