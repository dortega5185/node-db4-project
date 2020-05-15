const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/:id/recipes", (req, res) => {
  const { id } = req.params;
  console.log({ id });
  Recipes.getRecipesByIngredients(id)
    .then((recipes) => {
      if (recipes) {
        res.json(recipes);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipes with the ingredient id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

module.exports = router;
