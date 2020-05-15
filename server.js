const express = require("express");

const recipeRouter = require("./recipes/recipeRouter.js");

const ingredientsRouter = require("./recipes/ingredientsRouter.js");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientsRouter);

module.exports = server;
