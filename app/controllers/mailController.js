require('dotenv').config();
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator/check');


const mailController={};

const validationHandler = next => result => {
  if (result.isEmpty()) return;

  if (!next)
    throw new Error(
      result
        .array()
        .map(i => `${i.param} has ${i.msg}`)
        .join(" ")
    );
  else
    return next(
      new Error(
        result
          .array()
          .map(i => ` ${i.param}  has ${i.msg}`)
          .join("")
      )
    );
};

mailController.index = (req, res) =>{
  // eslint-disable-next-line no-console
  console.log('Micro Services');
  res.send('Micro Services Server');
}
mailController.enviar = (req, res,next) => {
   
      
      var errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      } 


  console.log('Sending mail');
  // console.dir(req);
  let {email,content}=req.body;
    output =`
    <p> Sugerencia o queja </p>
    <h3>=== From: ${email}  ===</h3>
    <p> ${content} </p>

    `;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_AC, // generated ethereal user
          pass: process.env.EMAIL_PW  // generated ethereal password
      }
    });

    let mailOptions = {
        from: 'dev.aqp.peru@gmail.com', // sender address
        to: 'alonso.hl25@gmail.com',// list of receivers
        subject: 'recepcion de sugerencias', // Subject line
        text: 'Revise el correo en un navegador valido, compatible con HTML', // plain text body
        html: output // html body ,
        
    };

    // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.send('Exito')
    });
    console.log(output);
  // })
  // .catch(next)
};

module.exports = mailController;