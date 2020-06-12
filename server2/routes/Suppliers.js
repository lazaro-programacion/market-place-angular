const express = require('express');
const router = express.Router();
const supplierController = require("../controllers/Suppliers")

router.get("/", supplierController.getSuppliers);
router.post("/", supplierController.createSuppliers);
router.get("/:id", supplierController.getSuppliersID);
router.delete("/:id", supplierController.getDelete);
router.put("/:id", supplierController.getUpdate)


module.exports = router;
