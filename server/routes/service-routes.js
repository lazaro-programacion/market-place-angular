const { getAllServices, createService, getServiceById, updateService, deleteServiceById } = require('../controllers/service');
const { Router } = require('express');
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


const router = Router();


router
    .post('/', createService)
    .get('/', getAllServices)
    .get('/:id', getServiceById)
    .put('/:id', updateService)
    .delete('/', deleteServiceById)
    .post('/upload', upload.single('file'), (req, res, next) => {
        const file = req.file;
        if (!file) {
            const error = new Error('Sin archivo');
            error.httpStatusCode = 400;
            return next(error);
        }
        res.download('');
        return res.status(200).jsonp({ url: `http://localhost:4000/static/${file.originalname}` });
    })

module.exports = router