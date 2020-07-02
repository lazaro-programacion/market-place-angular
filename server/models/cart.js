// cargar mongoose
var mongoose = require('mongoose');
const moment = require('moment')
// para utilizar los objetos de este tipo
const Schema = mongoose.Schema;

// crear propiedades del objeto
/*
const CartSchema = Schema({
    date: Date,
    
    
    totalCart: Number,
    miCart: [{
        quantity: Number,
       
        service: {type: Schema.ObjectId, ref: 'Service'},
        supplier: {type: Schema.ObjectId, ref: 'Suppliers'}
    }],
    user: {type: Schema.ObjectId, ref: 'User'} 
});
*/
const CartSchema = Schema({
    date: Date,
    // order: shortuid libreria de id
    // incidencia: boolean (abrierta o cerrada)
     // unit_price: Number,
    quantity: Number,
    service: {type: Schema.ObjectId, ref: 'Service'},
    supplier: {type: Schema.ObjectId, ref: 'Suppliers'},
    user: {type: Schema.ObjectId, ref: 'User'} // referencia a otra coleccion por id
});








// los objetos que voy a crear al exportar son 'Article' y con el esquema de ArticleSchema
module.exports = mongoose.model('Cart', CartSchema);