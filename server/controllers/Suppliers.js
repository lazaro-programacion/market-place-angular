const Suppliers = require('../models/Suppliers');

const patientController = {


    getSuppliers: (req, res) => {
        // console.log(res); 
        Suppliers.find(
            (err, suppliers) => {
                return err ? res.status(500).send(err) : res.status(200).jsonp(suppliers)
            }
        )
    },


    createSuppliers: (req, res) => { // lo cogemos del body el nuevo supplier
        // console.log(req.body);
        const suplier = new Suppliers();
        const { body } = req;
        suplier.nombre = body.nombre;
        suplier.apellidos = body.apellidos;
        suplier.nif = body.nif;
        suplier.iban = body.iban;
        suplier.imagen = body.imagen;
        suplier.active = body.active;
        suplier.email = body.email;

        suplier.save(
            (err, newSuppliers) =>
                err ?
                    res.status(500).send("Error guardando supplier : " + err.message) :
                    res.status(201).jsonp(newSuppliers)
        );
    },


    getSuppliersID: (req, res) => {
        Suppliers.findById(req.params.id, (err, suppliers) =>
            err ? res.status(500).send("error") : res.status(200).jsonp(suppliers)
        )
    },

    getDelete: (req, res) => {
        Suppliers.findByIdAndDelete({ _id: req.params.id }, (err, suppliers) =>
            err ? res.status(500).send("error") : res.status(200).send('borrado ' + req.params.id +' correctamente')
        )
    },

    getUpdate: (req, res) => {
        // console.log(req.body);
        Suppliers.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, suppliers) =>
            err ? res.status(500).send("error") : res.status(200).jsonp(suppliers)
        )
    },


}

module.exports = patientController
