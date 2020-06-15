const User = require('../models/User');

const userController  = {

    createUser :(req, res) => {
        console.log(req.body);
        const user = new User();
        user.usuario = req.body.usuario;
        user.email = req.body.email;
        user.rol = req.body.rol;
        user.password = req.body.password;

        user.save(
            (err, newUser) =>
                err ?
                res.status(500).send("Error guardando : " + err.message):
                res.status(201).jsonp(newUser)
        );
    },
    getUser: (req, res)  => {
      User.find( (err, user) =>
            err ? res.status(500).send("error") : res.status(200).jsonp(user)
        )
    },

    getUserID: (req, res)  => {
      User.findById(req.params.id, (err, user) =>
            err ? res.status(500).send("error") : res.status(200).jsonp(user)
        )
    },
    getDelete: (req, res)  => {
      User.findByIdAndDelete({_id: req.params.id}, (err, user) =>
      err ? res.status(500).send("error") : res.status(200).send('borrado correctamente')
        )
    },

    getUpdate: (req, res)  => {
      User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, user) =>
      err ? res.status(500).send("error") : res.status(200).jsonp(user)
        )
    },


}

module.exports = userController
