const jwt = require('jwt-simple')
const moment = require('moment')
// clave secreta del tpken - semilla
const secret = 'clave_secreta'

exports.createToken = function(user){
    const payload = {
        sub: user._id,
        usuario: user.usuario,
        email: user.email,
        rol: user.rol,
        imagen: user.imagen,
        iat: moment().unix(),  // fecha craecion del token
        exp: moment().add(30, 'days').unix// periedo de expiacion del token
        
    }

    return jwt.encode(payload, secret )
}