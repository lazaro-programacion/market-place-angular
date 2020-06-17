const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');
const multipart = require('connect-multiparty');

const mp_upload = multipart({uploadDir:'src/assets/images/upload_user'})

router.get("/", userController.getUser);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserID);
router.delete("/:id", userController.getDelete);
router.put("/:id", userController.getUpdate);
// router.get("/get-image/:image", userController.getImagen);
router.post("/upload-image/:id?", mp_upload, userController.upload);


module.exports = router;
