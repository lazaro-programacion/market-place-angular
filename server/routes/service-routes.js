const { getAllServices, createService, getServiceById, updateService, deleteServiceById } = require('../controllers/service');
const { Router } = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'src/assets/images/services')
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
    .post('/upload', upload.single('file'), (req, res, next) => {
        const file = req.file;
        if(!file){
            const error = new Error('No se ha seleccionado un archivo');
            error.httpStatusCode = 400;
            return next(error);
        }
        res.download('');
        return res.sendStatus(200);
    })

module.exports = router