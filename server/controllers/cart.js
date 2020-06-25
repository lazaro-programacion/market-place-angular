
// importar el modelo
const Cart= require('../models/cart');

const moment = require('moment')

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
            cart.quantity = params.quantity
            let today = new Date();
            cart.date = today
           
            
           cart.user = req.user.sub /// viene en el payload la identificacion del usuario

           cart.save((err, cartStored) =>{
               if(err){
                   res.status(500).send({message: 'error en el servidor'})
               }else{
                   if(!cartStored){
                    res.status(404).send({message: 'no se ha guardado el carrito'})
                   }else{
                    res.status(200).send({cart: cartStored})
                   }
               }
           })


          }
              
          
},

getCarts: (req, res) =>{
    // con populate ponemos en la propiedad user todas las propiedades del user de la otra coleccion
    Cart.find({}).populate({path: 'user'} ).populate({path: 'service'}).populate({path: 'supplier'}).exec((err, carts) =>{

      if(err){
          res.status(500).send({message:'error en la peticion'})
      }else{
          if(!carts){
            res.status(400).send({message:'no hay ningun carrito'})
          }else{
            res.status(200).send({
                message:'success',
                carts: carts
            })
          }
      }

    })
},

 getCartsUser : (req , res) =>{


    const cart = new Cart()

        //1. Recoger el id del usuario
       
          cart.user = req.user.sub /// viene en el payload la identificacion del usuario
          console.log('user', cart.user)
        //2. Comprobar que existe
        if(!cart.user || cart.user == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe un usuario !!!'
            });
        }
       

        // 3.Buscar el articulo - findById
        Cart.find({user: cart.user}).populate({path: 'service'}).populate({path: 'supplier'}).exec((err, carts) => {
            
            if(err || !carts){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay ningun carrito!!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                carts: carts
            });
            
        })
       
    },

filterCartDates : (req, res) => {
    const dateStart = new Date(req.params.start)
    const dateEnd = new Date (req.params.end)
    console.log('params', dateStart, dateEnd)
    if(!dateStart || !dateEnd){
        return res.status(404).send({
            status: 'error',
            message: 'Faltan datos en los params !!!'
        });
    }
    Cart.find({"$and" : [{"date" : {"$gte" : dateStart}}, {"date" : {"$lte" : dateEnd}}]})
            .populate({path: 'user'} )
            .populate({path: 'service'})
            .populate({path: 'supplier'})
            .exec((err, carts) =>{

                if(err){
                    res.status(500).send({message:'error en la peticion'})
                }else{
                    if(!carts){
                      res.status(400).send({message:'no hay ningun carrito'})
                    }else{
                      res.status(200).send({
                          message:'success',
                          carts: carts
                      })
                    }
                }
          
              })

            
    
  
}






}


// exportar el controlador
module.exports = controller;