// Inicialización
const mongoose = require("mongoose");
const express = require("express");
const { json } = require("express");
const serviceRoutes=require('./routes/service-routes')
const app = express();

app.use(json());

app.use('/service',serviceRoutes);

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


