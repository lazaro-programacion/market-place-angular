// Inicialización
const mongoose = require("mongoose");  // mongoose para mongodb
const express = require("express");    // Utilizamos express
const app = express();
const cors = require("cors")

	app.use(express.json()); // para entender json
  app.use(cors());


  app.use('/api/suppliers' , require('./routes/Suppliers'));  // donde coge las rutas
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
  .catch((err) => console.log("Error conectando a db", err));


