// cargar mongoose
var mongoose = require('mongoose');
//const { stringify } = require('querystring');
// para utilizar los objetos de este tipo
var Schema = mongoose.Schema;

// crear propiedades del objeto
var CartSchema = Schema({
    //date: new Date().toLocaleString(),
    quantity: Number,
    //totalCart: Number,
    service: {type: Schema.ObjectId, ref: 'Service'},
    supplier: {type: Schema.ObjectId, ref: 'Suppliers'},
    user: {type: Schema.ObjectId, ref: 'User'} // referencia a otra coleccion por id
});

// los objetos que voy a crear al exportar son 'Article' y con el esquema de ArticleSchema
module.exports = mongoose.model('Cart', CartSchema);