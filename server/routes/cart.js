// cargar express
const express = require('express');
// cargar controlador
const CartController = require('../controllers/cart');
// crear route de express
const router = express.Router();


// cargar middleware - aplicar a las rutas protegida spor token
const md_auth = require('../middlewares/authenticated')
const md_admin = require('../middlewares/isAdmin')




// Rutas útiles
router.post('/', [md_auth.ensureAuth, md_admin.isAdmin], CartController.saveCart);
router.get('/carts', CartController.getCarts);
router.get('/cart/:id', CartController.getCart);




module.exports = router;