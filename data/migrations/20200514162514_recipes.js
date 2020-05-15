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
      recipe_ingredients.varchar("quantity", 255).notNullable();

      recipe_ingredients
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id") // or .references('orders.id') then remove .inTable()
        .inTable("recipes")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT");

      recipe_ingredients
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id") // or .references('orders.id') then remove .inTable()
        .inTable("ingredients")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT");
    })

    .createTable("steps", (steps) => {
      steps.increments();
      steps.integer("step_number").notNullable();
      steps.string("instruction", 255).notNullable();

      steps
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id") // or .references('orders.id') then remove .inTable()
        .inTable("recipes")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
