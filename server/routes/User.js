const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');

router.get("/", userController.getUser);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserID);
router.delete("/:id", userController.getDelete);
router.put("/:id", userController.getUpdate)


module.exports = router;
