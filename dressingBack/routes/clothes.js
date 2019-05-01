var express = require('express');
var router = express.Router();

var dbacc = require('../dbaccess');

 //READ ALL
 router.get('/', function(req, res, next) {
   console.log("----> call read all clothes");
   dbacc.readClothes(function(err, data){
      if (err){
         res.send(500);
         return;
      }
      if(data == 0 || data == null || data == undefined || data == ""){
         res.send(500);
         return;
      }
      res.send(data);
   })
});



module.exports = router;