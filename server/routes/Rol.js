const express = require('express');
const router = express.Router();
const rolController = require('../controllers/Rol');

router.get("/", rolController.getRol);


module.exports = router;
