const jwt = require('jwt-simple')
const moment = require('moment')
const secret = 'clave_secreta'

exports.ensureAuth = function(req, res, next){
    // comprobar si llega la cabecera (headers) de autenticacion
    if(!req.headers.authorization){
        return res.status(403).send({message: 'la peticion no lleva el header de autenticacion'})
    }
                             // expresion regular para eliminar caracteres especiales del string del token
    const token = req.headers.authorization.replace(/['"]+/g, '')
   // console.log('token', token)
    try {
    // descodificar el token recibido y guardarlo en el payload
        const payload = jwt.decode(token, secret)
        //console.log('payload', payload)
        // comprobar que el token no ha expirado
         if (payload.exp <= moment().unix()) {
          return res.status(401).send({
              message: 'El token ha expirado'
          })
        }
       
        req.user = payload;
      //  console.log('user', req.user)

    } catch (error) {
        return res.status(401).send({
            message: 'El token no es valido'
        })
    }
 
    
  // req.user = payload;
  // console.log('user', req.user)

   next();

}