/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser') //para parsear el parametro body que enviaremos
const expressValidator = require('express-validator')

const routes = require('./routes');
const app = express();




// ==== MIDDLEWARE'S =====



app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method==='OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({})
  }
  next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));    //para limitar archivos que se envian por la url como  imagenes etc
app.use(expressValidator());    //Valida los de entrada desde la url 
app.use('/', routes);

app.set('port', process.env.APP_PORT || 3010);
app.listen(app.get('port'), ()=>{
  console.log("Running on:" + app.get('port'))}
  );
app.use(function(req, res, next) {
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
  next();
  });





module.export = app;