const mongoose = require("mongoose");

const rolSchema = mongoose.Schema({

  rol: String,

});

module.exports = mongoose.model("Roles", rolSchema);
