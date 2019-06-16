/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser') //para parsear el parametro body que enviaremos
const expressValidator = require('express-validator')

const routes = require('./routes');
const app = express();




// ==== MIDDLEWARE =====



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

//  app.use( (req,res,next)=>{console.log("middle1")
// // next();
//     next();
// });
// app.use( (req,res,next)=>{console.log("middle2")
// next();
// });

// app.use('/', BTRoutes);

app.use('/', routes);
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  
// //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//   // Pass to next layer of middleware
//   next();
// });


app.set('port', process.env.APP_PORT || 3010);
app.listen(app.get('port'), ()=>{
  // eslint-disable-next-line no-console
  console.log("Running on:" + app.get('port'))}
  );


app.use(function(req, res, next) {
// custom console
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
  next();
  });




// app.get('/',function(req,res) {
//   // console.log("Request IP: " + req.url);
//   res.end();
//     // res.send('hola');
//   });




module.export = app;