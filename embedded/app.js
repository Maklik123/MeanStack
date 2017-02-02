var express= require('express');
var app= express();
var bodyparser= require('body-parser');
var ejs= require('ejs');

var port=3000;

//MiddleWare
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


//Template Engine
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');


//Routes
app.get('/', function(req,res){
  res.render('pages/home');
});

app.get('/about',function(req,res){
  res.render('pages/about');
});
app.get('/contact',function(req,res){
  res.render('pages/contact');
});

app.listen(port, function(){
  console.log('The Server is running on port' + port);
});
