const { getAllServices, createService, getServiceById, updateService, deleteServiceById } = require('../controllers/service');
const { Router } = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads')
    },
    filename: (req, file, callback) => {
        // console.log('object',file)
        callback(null, file.originalname);
    }
});

const upload = multer( {storage});


const router = Router();


router
    .post('/', createService)
    .get('/', getAllServices)
    .get('/:id', getServiceById)
    .put('/:id', updateService)
    .delete('/', deleteServiceById)
    .post('/upload', upload.single('file'), (req, res) => {
        const file = req.file;
        console.log('mi imagen', file.originalname)
        res.download('/uploads', file.originalname);
    })

module.exports = router