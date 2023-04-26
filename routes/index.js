const express = require("express");
const recipeRoutes = require("./recipe.routes");
const authRoutes = require("./users.routes");

/* Funcion para agregar las rutas */
function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use(recipeRoutes);
  router.use(authRoutes);
}

module.exports = routerApi;
