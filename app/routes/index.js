const express = require('express');
const router = express.Router();
const mailController = require('./../controllers/mailController');
const appValidator = require("./Validator").validate;


// router.post('/sendEmail',appValidator('sendMail2'), mailController.enviar);
 router.post('/sendEmail',appValidator('sendMail'), mailController.enviar);


module.exports = router;