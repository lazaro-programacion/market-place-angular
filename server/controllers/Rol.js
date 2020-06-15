const Rol = require('../models/Rol');

const rolController  = {


    getRol: (req, res)  => {
      Rol.find( (err, roles) =>
            err ? res.status(500).send("error") : res.status(200).jsonp(roles)
        )
    }




}

module.exports = rolController
