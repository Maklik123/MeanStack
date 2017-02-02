var express= require('express');
var ejs= require('ejs');
var crypt= require('crypto-js');
var bodyparser= require('body-parser');
var fs= require('fs');
const monk=require('monk');

var app=express();
var port=4000;

//Midde Ware
app.use(express.static(__dirname+'/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//Template Engine
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//Url of DataBase
const url = 'localhost:27017/website';
const db = monk(url);
const collection=db.get('document');

//Routes

app.get('/',function(req,res){
  res.render('pages/home');
});
app.get('#opensignpage',function(req,res){
  res.render('partials/signup');
});
app.get('/login',function(req,res){
  res.render('partials/login');
});
app.get('/signup',function(req,res){
  res.render('partials/signup');
});
app.get('/about',function(req,res){
  res.render('pages/about');
});
app.get('/contact',function(req,res){
  res.render('pages/contact');
});

//Login from the homr page
app.post('/home',function(req,res){
    var user=req.body.email;
    var pass=crypt.MD5(req.body.password).toString();
    collection.findOne({email: user, password: pass}).then((docs) =>{
      res.send(docs);
    }).catch((err)=>{
      console.log(err);
    }).then(()=>db.close());
    //Window.location('/about');
    res.redirect('/contact');
});

// Store the info of user in the database
app.post('/signup',function(req,res){
  var username=req.body.username;
  var user =req.body.email;
  var pass=crypt.MD5(req.body.password).toString();
  var cnfmpass=crypt.MD5(req.body.cnfmpassword).toString();
  var fstname=req.body.fname;
  var lstname=req.body.lname;
  var add=req.body.address;
  var contact=req.body.contactnumber;

  collection.insert([
    {
      username: username,
      email: user,
      password: pass,
      confrimpass: cnfmpass,
      firstname:fstname,
      lastname:lstname,
      addrerss: add,
      contactNumber: contact
    }
  ]).then((docs)=>{
    res.send(docs);
  }).catch((err)=>{
    console.log(err);
  }).then(()=>db.close());

  res.redirect('/');
});

//json data through fs

var data=fs.readFileSync('./fs/gexton.json');
//var words=Json.parse(data);
function fetch(){
  $.ajax({
    type :'get',
    datatype:'json',
    data : {

    }
  });
}




//database port
db.then(() => {
  console.log('The database is working on port 27017');
}).catch((err) => {
  console.log("Error:" + err);
});

app.listen(port, function(){
  console.log("This server is working on port: " + port);
});
