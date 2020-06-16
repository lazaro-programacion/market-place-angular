// Inicialización
const mongoose = require("mongoose");  // mongoose para mongodb
const express = require("express");    // Utilizamos express
var cors = require('cors')
const app = express();

  app.use(cors());

	app.use(express.json()); // para entender json

  app.use('/api/user' ,require('./routes/User'));
  app.use('/api/rol' ,require('./routes/Rol'));   // donde coge las rutas estaaaaa
  // Configuracion
 app.use('/api/service', require('./routes/service-routes'))
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


