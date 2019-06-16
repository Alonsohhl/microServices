const { body,check} = require('express-validator/check');

// var validator = require('validator');

exports.validate = (method) => {
    switch (method) {
      case 'sendMail': {
       return [ 
          body('content', "content not  found").exists(),
          body('email', 'Email doesnt exist').exists(),
          body('email', 'Invalid email').isEmail(),
          // body('email', 'Invalid email').exists().isEmail(),
        //   body('phone').optional().isInt(),
        //   body('status').optional().isIn(['enabled', 'disabled'])
         ]   
      }
      case 'sendMail2': {
        return [ 
            check('content', "content doesn't exists").exists(),
        //    body('email', 'Invalid email').exists().isEmail(),
         //   body('phone').optional().isInt(),
         //   body('status').optional().isIn(['enabled', 'disabled'])
          ]   
       }
    }
  }



exports.validatex = {
  MAIL: [
      check('usuUsuario')
        .isEmail()
        .normalizeEmail()
        .withMessage('Tiene que ser un correo valido'),
      check('usuPassword')
        .isLength({ min: 5 })
        .withMessage('Debe ser mayor de 5 caracteres'),
      check('usuNombre')
        .isLength({ min: 5 })
        .withMessage('Debe ser mayor de 5 caracteres'),
      check('usuCodAlumno')
        .isLength({ min: 5 })
        .withMessage('Debe ser mayor de 5 caracteres')
    ]
    
};

// exports.newval = (req,res,next) =>{
    
//     if (validator.isEmail('foo@bar.com')) //=> true
//     {
//         console.log('Validate');
//         next();        
//     }else{
//         res.send('Error');
//         console.log('en el false');
//     }
//   };