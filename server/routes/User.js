const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');
const multipart = require('connect-multiparty');

const mp_upload = multipart({uploadDir:'src/assets/images/upload_user'})

// cargar middleware - aplicar a las rutas protegida spor token
const md_auth = require('../middlewares/authenticated')
const md_admin = require('../middlewares/isAdmin')

router.get("/", userController.getUser);
router.post('/login', userController.login);
router.post("/register", userController.createUser);
router.get("/:id", userController.getUserID);
router.delete("/:id",  [md_auth.ensureAuth, md_admin.isAdmin ], userController.getDelete);
router.put("/update-user/:id", md_auth.ensureAuth  , userController.getUpdate);
router.put("/update/:id", [md_auth.ensureAuth ,md_admin.isAdmin ] , userController.AdmingetUpdate);
router.put("/:id" , userController.getPassword);
router.get("/get-image/:image", userController.getImagen);
router.post("/upload-image/:id?", mp_upload, userController.upload);
router.get("/search/:search",  [md_auth.ensureAuth, md_admin.isAdmin]  , userController.getSearch);

router.get("/email/:email", userController.getEmail);


module.exports = router;
