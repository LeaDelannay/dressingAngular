var express = require('express');
var router = express.Router();

var dbacc = require('../dbaccess');

//READ ALL
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


//CREATE
router.post('/', function (req, res, next) {
   console.log("----> " + req.body);
   if (!req.body.nom_vet) {
      res.sendStatus(400);
      return;
   }
   dbacc.createClothe(req.body, function (err, data) {
      if (err) {
         res.sendStatus(500);
         return;
      }
      res.sendStatus(data);
   })
});

//UPDATE

//DELETE


module.exports = router;