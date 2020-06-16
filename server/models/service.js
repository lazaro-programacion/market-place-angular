const mongoose=require('mongoose');

const serviceSchema=mongoose.Schema(
    {
     nombre: String,
     descripcion: String,   
     imagen: String,
     active:Boolean,
     price: Number
    }
)

module.exports=mongoose.model('Service', serviceSchema);