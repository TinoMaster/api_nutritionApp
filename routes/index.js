const express = require("express");
const recipeRoutes = require("./recipe.routes");

/* Funcion para agregar las rutas */
function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use(recipeRoutes);
}

module.exports = routerApi;
