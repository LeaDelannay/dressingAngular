var express = require('express');
var router = express.Router();

var dbacc = require('../dbaccess');

//READ ALL CLOTHES
router.get('/', function (req, res, next) {
   console.log("----> call read all clothes");
   dbacc.readClothes(function (err, data) {
      if (err) {
         res.sendStatus(500);
         return;
      }
      if (data == 0 || data == null || data == undefined || data == "") {
         res.sendStatus(204); //no content
         return;
      }
      res.send(data);
   })
});


//CREATE CLOTHE
router.post('/', function (req, res, next) {
   console.log("req.body ----> " + req.body);
   var contenuRecuReq = JSON.stringify(req.body);
   console.log("req.body json.stringify ----> " + contenuRecuReq);
   if (!req.body.NOM_VET) {
      res.sendStatus(400);
      return;
   }
   dbacc.createClothe(req.body, function (err, data) {
      if (err) {
         res.sendStatus(500);
         return;
      }
      res.send(data);
   })
});

//UPDATE

//DELETE


module.exports = router;