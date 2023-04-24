require("dotenv").config();
const config_apiRecipe = {
  url: process.env.URL_API_RECIPE,
  key: process.env.KEY_API_RECIPE,
  id: process.env.ID_API_RECIPE,
};

module.exports = config_apiRecipe;
