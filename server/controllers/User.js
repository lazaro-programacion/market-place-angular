const User = require("../models/User");
const fs = require("fs");
const path = require("path");

const userController = {
  createUser: (req, res) => {
    console.log("la req ", req.body);
    const user = new User();
    user.usuario = req.body.usuario;
    user.email = req.body.email;
    user.rol = req.body.rol;
    user.password = req.body.password;

    user.save((err, newUser) =>
      err
        ? res.status(500).send("Error guardando : " + err.message)
        : res.status(201).jsonp(newUser)
    );
  },
  getUser: (req, res) => {
    User.find((err, user) =>
      err ? res.status(500).send("error") : res.status(200).jsonp(user)
    );
  },

  getUserID: (req, res) => {
    User.findById(req.params.id, (err, user) =>
      err ? res.status(500).send("error") : res.status(200).jsonp(user)
    );
  },
  getDelete: (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err, user) =>
      err
        ? res.status(500).send("error")
        : res.status(200).send("borrado correctamente")
    );
  },

  getUpdate: (req, res) => {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, user) =>
        err ? res.status(500).send("error") : res.status(200).jsonp(user)
    );
  },

  upload: (req, res) => {
    const user = new User();
    console.log("esto es req", req.files);
    if (!req.files) {
      return res.status(404).send("No se a subido ninguna imagen");
    }
    const file_path = req.files.file0.path;
    const file_split = file_path.split("\\");
    const file_name = file_split[4];
    const extension_split = file_name.split(".");
    const file_ext = extension_split[1];
    console.log("filenamee", file_name);
    if (file_ext != "jpg" && file_ext != "png") {
      fs.unlink(file_path, (err) => {
        return res.status(200).send("Solo se permite jpg y png");
      });
    } else {
      const imagenId = req.params.id;
      console.log("imgid  file name", imagenId, file_name);
      if (imagenId) {
        User.findByIdAndUpdate(
          { _id: imagenId },
          { imagen: file_name },
          { new: true },
          (err, userUpload) => {
            if (err || !userUpload) {
              return res.status(200).send("Error al guardar la imagen");
            }
            return res.status(200).send({
              user: userUpload,
            });
          }
        );
      } else {
        return res.status(200).send({
          imagen: file_name,
        });
      }
    }
  },

  getSearch: (req, res) => {
    const busqueda = req.params.search;
    console.log(busqueda);
    User.find({
      $or: [
        { usuario: { $regex: busqueda, $options: "i" } },
        { email: { $regex: busqueda, $options: "i" } },
        { rol: { $regex: busqueda, $options: "i" } },
      ],
    })
      .sort([["descending"]])
      .exec((err, users) => {
        if (err) {
          return res.status(500).send("erroraco");
        }
        if (!users || users.length <= 0) {
             return res.status(404).jsonp({message: 'No hay resultados de la busqueda'})

         // return res.status(200).jsonp(users);
        }
        return res.status(200).jsonp(users);
      });
  },
};

module.exports = userController;
