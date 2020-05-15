exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("steps").insert([
    {
      step_number: 1,
      instruction: "crack 3 eggs into a medium flamed frying pan",
      recipes_id: 1,
    },
    {
      step_number: 2,
      instruction: "stir around make sure the eggs are getting mixed",
      recipes_id: 1,
    },
    {
      step_number: 3,
      instruction:
        "add a dab of salt and pepper to the eggs as you're mixing them",
      recipes_id: 1,
    },
    {
      step_number: 4,
      instruction: "place 3 slices of bacon on a high heat frying pan",
      recipes_id: 1,
    },
    {
      step_number: 5,
      instruction: "flip once golden brown around the edges",
      recipes_id: 1,
    },
    {
      step_number: 6,
      instruction: "place both on plate and you're done",
      recipes_id: 1,
    },
    {
      step_number: 1,
      instruction: "crack 3 eggs into a medium flamed frying pan",
      recipes_id: 2,
    },
    { step_number: 2, instruction: "stir around", recipes_id: 2 },
    {
      step_number: 3,
      instruction: "cut up maple chicken sausage to small pieces",
      recipes_id: 2,
    },
    {
      step_number: 4,
      instruction: "place sausage pieces on the same frying pan with the eggs",
      recipes_id: 2,
    },
    {
      step_number: 5,
      instruction: "stir around till sausage is golden brown",
      recipes_id: 2,
    },
    {
      step_number: 6,
      instruction: "place eggs and sausage pieces on plate and add maple syrup",
      recipes_id: 2,
    },
  ]);
  // add data into insert
};
