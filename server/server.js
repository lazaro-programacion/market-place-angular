// Inicialización
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Configuracion
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0-rckpe.mongodb.net/market-store-jedi?retryWrites=true&w=majority"
  )
  .then((res) =>
    app.listen(4000, () => {
      console.log("mongodb is running");
    })
  )
  .catch((err) => console.log("se fue a la mierda"));


