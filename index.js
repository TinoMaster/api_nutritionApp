const express = require("express");
const cors = require("cors");
const routerApi = require("./routes/index");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

routerApi(app);

app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));