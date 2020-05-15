exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("ingredients").insert([
    { name: "eggs" },
    { name: "butter" },
    { name: "bacon" },
    { name: "salt" },
    { name: "pepper" },
    { name: "maple chicken sausage" },
    { name: "eggs" },
    { name: "butter" },
    { name: "maple syrup" },
  ]);
  // add data into insert
};
