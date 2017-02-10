const routes = require('express').Router();
const multer = require('multer');
const bcrypt = require('bcrypt-nodejs');

const db= require('../db/db');

const upload = multer({dest: 'uploads/'});
var user='';

routes.get('/',function(req,res){
  res.render('pages/index',{user:user});
});
routes.get('/signup',function(req,res){
  res.render('partials/signup');
});
routes.post('/signup',upload.single('avatar'),function(req,res,next){
  var pass=req.body.password;
  bcrypt.hash(pass, null, null, function(err, hash){
    if(err) return next(err);
    //DataBase Connection
    db.collection.insert([{
      name : req.body.username,
      email : req.body.email,
      password : hash,
      path: req.body.path
    }])
  });
  res.redirect('/')
});

routes.get('/login',function(req,res){
  res.render('partials/login');
});

routes.post('/login',function(req,res,next){
  //Fetching the Data from Database
  db.collection.findOne({name:req.body.username}).then((docs) =>{
      //Compare password from database and body
    bcrypt.compare(req.body.password,docs.password,function(err, response){
      if(err) return next(err);

      if(response == true){
        user = req.body.username;
        res.render('/');
      }else{
        res.render('login',{err: 'username or password is invalid'});
      }
    });
  }).catch((err)=>{
    console.log(err);
    res.render('login',{err :"username doesnot exits"});
  });
});

routes.get('/profilebody',function(req,res){
  res.render('partials/profilebody');
});


module.exports = routes;
