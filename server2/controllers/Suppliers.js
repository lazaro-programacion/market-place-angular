const Suppliers = require('../models/Suppliers');

const patientController  = {
    getSuppliers : (req, res) => {
      Suppliers.find(
            (err, suppliers) => {
                return err ?  res.status(500).send(err) :  res.status(200).jsonp(suppliers)
            }
        )
    },
    createSuppliers :(req, res) => {
        console.log(req.body);
        const suplier = new Suppliers();
        suplier.nombre = req.body.nombre;
        suplier.apellidos = req.body.apellidos;
        suplier.nif = req.body.nif;
        suplier.iban = req.body.iban;
        suplier.imagen = req.body.imagen;
        suplier.active = req.body.active;
        suplier.email = req.body.email

        suplier.save(
            (err, newSuppliers) =>
                err ?
                res.status(500).send("Error guardando : " + err.message):
                res.status(201).jsonp(newSuppliers)
        );
    },
    getSuppliers: (req, res)  => {
      Suppliers.find( (err, suppliers) =>
            err ? res.status(500).send("error") : res.status(200).jsonp(suppliers)
        )
    },

    getSuppliersID: (req, res)  => {
      Suppliers.findById(req.params.id, (err, suppliers) =>
            err ? res.status(500).send("error") : res.status(200).jsonp(suppliers)
        )
    },
    getDelete: (req, res)  => {
      Suppliers.findByIdAndDelete({_id: req.params.id}, (err, suppliers) =>
      err ? res.status(500).send("error") : res.status(200).send('borrado correctamente')
        )
    },

    getUpdate: (req, res)  => {
      Suppliers.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, suppliers) =>
      err ? res.status(500).send("error") : res.status(200).jsonp(suppliers)
        )
    },


}

module.exports = patientController
