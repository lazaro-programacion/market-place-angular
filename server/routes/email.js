const express = require('express');
const router = express.Router();
const mail = require('../mailer');
//const multipart = require('connect-multiparty');
//const mp_upload = multipart({uploadDir:'src/assets/images/upload_user'})



router.post('/', (req, res)=>{
    const mailOptions = {
        to: "christophe.blick@ethereal.email",
        subject: "Enviado desde Nodemailer",
        text: "Alta Proveedor",
        html: `
        <div>
            <p>Nombre: ${req.body.nombre}</p>
            <p>CIF: ${req.body.cif} </p>
            <p>Email: ${req.body.email}</p>
            <p>Iban: ${req.body.iban}</p>
            <p>Datos Extra: ${req.body.extraDate}</p>
        </div>
        `
    }

   mail.sendMail(mailOptions)
   if(!res){
    res.status(500).send(error.message);
} else {
  console.log('email enviado');
  res.status(200).jsonp(req.body);
}

});
// router.post('/', mail.sendEmail);

module.exports = router;