const nodemailer = require("nodemailer")

class Mailer {
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user:"christophe.blick@ethereal.email", // generated ethereal user
              pass: "keUWAM8T2ctQ2UepSD"// generated ethereal password
            },
          });

             // options por default         
       this.mailOptions ={
        from: ' "contact@jedi-market.email" <contact@jedi-market.email>'
       }

    }
 
  
 

    // metodo enviar email
    sendMail(options){
       console.log('mandando un email')
       let misoptions ={
         ...this.mailOptions,
        ...options
       }

      this.transporter.sendMail(misoptions, (error, info)=>{
        if(error){
          console.log('email enviado', error.message);
        } else {
          console.log('email enviado', info);
         
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          //res.status(200).send('ok');
          
          this.transporter.close()  
                }
            this.transporter.close()    
  })
    }
}

module.exports = new Mailer()