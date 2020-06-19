const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

  usuario: String,
  email: String,
  rol: String, // poner como lista
  password: String,
  imagen: String
});

module.exports = mongoose.model("User", userSchema);
