const mongoose = require("mongoose");

const suppliersSchema = mongoose.Schema({

  nombre: String,
  apellidos: String,
  nif: String,
  iban: String,
  imagen: String,
  active: Boolean,
  email: String,
});

module.exports = mongoose.model("Suppliers", suppliersSchema);