var express = require('express');
var router = express.Router();

var dbacc = require('../dbaccess');

 //READ ALL
 router.get('/', function(req, res, next) {
   console.log("----> call read all occasions");
   dbacc.readOccasions(function(err, data){
      if (err){
        res.sendStatus(500);
         return;
      }
      if(data == 0 || data == null || data == undefined || data == ""){
        res.sendStatus(204);
         return;
      }
      res.send(data);
   })
});

//READ TOUS LES VETEMENTS POSSEDANT UNE OCCASION SPECIFIQUE
router.get('/:idOccas', function(req, res, next) {
   console.log("----> call read clothes with idOccas");
   dbacc.readSpecificOccas(req.params.idOccas, function(err, data){
      console.log(data);
      if (err){
        res.sendStatus(500);
         return;
      }
      if(data == 0 || data == null || data == undefined || data == ""){
        res.sendStatus(204); //no content
         return;
      }
      res.send(data);
   })
});

module.exports = router;