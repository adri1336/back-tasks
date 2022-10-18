const express = require("express");
const bodyParser = require("body-parser");

require("./config/Db");
const router = require("./routes/index");

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  app.use("/", router);
  console.log("OK! Servidor encendido y escuchando por el puerto: " + port);
});