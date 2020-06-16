const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

  usuario: String,
  email: String,
  rol: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
