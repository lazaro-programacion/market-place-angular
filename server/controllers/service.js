const Service = require('../models/service');

const serviceController = {
    getAllServices: (req, res) => {
        Service.find(
            (err, services) => {
                return err ? res.status(500).send(err) : res.status(200).jsonp(services)
            }
        )
    },
    createService: (req, res) => {
        const { body } = req;
        const service = new Service();
        service.nombre = body.nombre;
        service.descripcion = body.descripcion;
        service.imagen = body.imagen;
        service.active = body.active;
        service.price = body.price;
        service.save(
            (err, newService) => err ? res.status(500).send("error al guardar " + err.message) :
                res.status(201).send(newService)
        );
    },
    getServiceById: (req, res) => {
        Service.findById(req.params.id, (err, service) =>
            err ? res.status(500).send("error") : res.status(200).jsonp(service)
        )
    },
    updateService: (req, res) => {
        const { body, params } = req;
        Service.findById(params.id, (err, service) => {
            if (err) {
                return res.status(404).send("Not found");
            }
            service.nombre = body.name;
            service.descripcion = body.descripcion;
            service.imagen = body.imagen;
            service.active = body.active;
            service.price = body.price;
            service.save()
            return res.status(200).jsonp(service)
        })
    },
    deleteServiceById: (req, res) => {
        const { id } = req.params;
        Service.findById(id, (err, service) => {
            if (err) {
                return res.status(500);
            }
            if (!service) {
                return res.status(404).send("not found")
            }
            service.remove();
            return res.status(200).jsonp(service);
        })
    }

}

module.exports = serviceController;