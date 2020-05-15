exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("recipes").insert([
    { name: "Eggs ands Bacon" },
    { name: "Maple Chicken Sausage Egg Scramble" },
  ]);
  // add data into insert
};
