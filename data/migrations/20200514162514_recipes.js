exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (recipes) => {
      recipes.increments();

      recipes.string("name", 255).notNullable();
    })
    .createTable("ingredients", (ingredients) => {
      ingredients.increments();

      ingredients.string("name", 255).notNullable();
    })
    .createTable("recipe_ingredients", (recipe_ingredients) => {
      recipe_ingredients.increments();

      recipe_ingredients
        .integer("order")
        .unsigned()
        .notNullable()
        .references("id") // or .references('orders.id') then remove .inTable()
        .inTable("recipes")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT");

      recipe_ingredients
        .integer("order")
        .unsigned()
        .notNullable()
        .references("id") // or .references('orders.id') then remove .inTable()
        .inTable("ingredients")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {};
