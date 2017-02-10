const monk = require('monk');
//DataBase Established

 var url = 'localhost:27017/ecomerce';
 var db = monk(url);
 var collection = db.get('document');

 module.exports = {
   collection : collection,
   CheckDb: function(){
     //Database Connection
    db.then(() => {
      console.log('Our database is currently running');
    }).catch((err) => {
      console.log('The error is: ' + err);
    });
   }
 };
