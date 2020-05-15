exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("recipe_ingredients").insert([
    { quantity: "3 eggs", recipes_id: 1, ingredients_id: 1 },
    { quantity: "butter", recipes_id: 1, ingredients_id: 2 },
    { quantity: "3 strips of bacon", recipes_id: 1, ingredients_id: 3 },
    { quantity: "dab of salt", recipes_id: 1, ingredients_id: 4 },
    { quantity: "dab of pepper", recipes_id: 1, ingredients_id: 5 },
    {
      quantity: "2 maple chicken sausages",
      recipes_id: 2,
      ingredients_id: 6,
    },
    { quantity: "3 eggs", recipes_id: 2, ingredients_id: 7 },
    { quantity: "butter", recipes_id: 2, ingredients_id: 8 },
    {
      quantity: "1.5 seconds of maple syrup",
      recipes_id: 2,
      ingredients_id: 9,
    },
  ]);
  // add data into insert
};
