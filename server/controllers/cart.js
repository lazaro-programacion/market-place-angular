// importar libreria bcrypt
const bcrypt = require('bcrypt');
// importar jwt
const jwt = require('../jwt/jwt');
// importar filesystem para poder borrar archivos
const fs = require('fs');
// importar path (para rutas de archivos)
const path = require('path');
// importar el modelo
const Service= require('../models/service');
const Supplier= require('../models/Suppliers');
const User= require('../models/User');
const Cart= require('../models/cart');


// objeto controller
const controller = {
    saveCart : (req, res) =>  {
    
        // crear el objeto usuario
         const cart = new Cart()

          // 1.Recoger parametros (body) por post
          var params = req.body;
         console.log('body', req.body)
         
          // Asignar valores al objeto - el nombre lo hacemos obligatorio
          if(params.quantity){
            cart.service = params.service
            cart.supplier = params.supplier
           
            
           cart.user = req.user.sub /// viene en el payload la identificacion del usuario

           cart.save((err, cartStored) =>{
               if(err){
                   res.status(500).send({message: 'error en el servidor'})
               }else{
                   if(!cartStored){
                    res.status(404).send({message: 'no se ha guardado el animal'})
                   }else{
                    res.status(200).send({cart: cartStored})
                   }
               }
           })


          }
              
          
},
/*
app.get("/libros", function(req, res) {
    2    Libro.find({}, function(err, libros) {
    3        Autor.populate(libros, {path: "autor"},function(err, libros){
    4            res.status(200).send(libros);
    5        }); 
    6    });
    7});
*/
getCarts: (req, res) =>{
    // con populate ponemos en la propiedad user todas las propiedades del user de la otra coleccion
    Cart.find({}).populate({path: 'user'} ).populate({path: 'service'}).populate({path: 'supplier'}).exec((err, carts) =>{

      if(err){
          res.status(500).send({message:'error en la peticion'})
      }else{
          if(!carts){
            res.status(400).send({message:'no hay animales'})
          }else{
            res.status(200).send({
                message:'success',
                carts: carts
            })
          }
      }

    })
},

    getCart : (req , res) =>{
        //1. Recoger el id de la url
        const cartId = req.params.id;

        //2. Comprobar que existe
        if(!cartId || cartId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el carrito !!!'
            });
        }

        // 3.Buscar el articulo - findById
        Animal.findById(cartId, (err, cart) => {
            
            if(err || !animal){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay ningun carrito!!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                cart: cart
            });
            
        })
    },

}


// exportar el controlador
module.exports = controller;