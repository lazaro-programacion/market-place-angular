const { getAllServices, createService, getServiceById, updateService, deleteServiceById } = require('../controllers/service');
const { Router } = require('express');

const router = Router();

router
    .post('/', createService)
    .get('/', getAllServices)
    .get('/:id', getServiceById)
    .put('/:id', updateService)
    .delete('/', deleteServiceById)

module.exports = router