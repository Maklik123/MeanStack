const express= require('express');
const bodyparser= require('body-parser');
const ejs = require('ejs');
const db= require('./db/db');
const app=express();
const port=5000;

//MiddleWare
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//Template Engine
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//User MiddleWare
var router= require('./routes/mainRoutes');
app.use(router);

//Databasse Connection
db.CheckDb();

app.listen(port,function(req,res){
  console.log('The server id running on'+ port );
});
