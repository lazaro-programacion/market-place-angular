const express = require('express');
const router = express.Router();
const supplierController = require("../controllers/Suppliers")
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'server/uploads')
    },
    filename: (req, file, callback) => {
        // console.log('object',file)
        callback(null, file.originalname);
    }
});

const upload = multer({ storage });



router.get("/", supplierController.getSuppliers);
router.get("/:id", supplierController.getSuppliersID);
router.post("/", supplierController.createSuppliers);
router.delete("/:id", supplierController.getDelete);
router.put("/:id", supplierController.getUpdate);
router.post('/upload', upload.single('file'), (req, res, next) => {
  const file = req.file;
  if (!file) {
      const error = new Error('Sin archivo');
      error.httpStatusCode = 400;
      return next(error);
  }
  res.download('');
  return res.status(200).jsonp({ url: `http://localhost:4000/static/${file.originalname}` });
})

module.exports = router;
