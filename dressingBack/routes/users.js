var express = require('express');
var router = express.Router();

var dbacc = require('../dbaccess');

//READ USER
router.get('/', function (req, res, next) {
   console.log("----> call read user");
   if (!req.body.LOGIN_USER || !req.body.MDP_USER) {
      res.sendStatus(400);
      return;
   }
   dbacc.readUser(req.body, function (err, data) {
      if (err) {
         res.sendStatus(500);
         return;
      }
      console.log(data);
      if (data == 0 || data == null || data == undefined || data == "") {
         res.sendStatus(403); //forbidden
         return;
      }
      res.send(data);
   })
});

//CREATE USER
router.post('/', function (req, res, next) {
   console.log("req.body ----> " + req.body);
   var contenuRecuReq = JSON.stringify(req.body);
   console.log("req.body json.stringify ----> " + contenuRecuReq);
   if (!req.body.LOGIN_USER || !req.body.MDP_USER) {
      res.sendStatus(400);
      return;
   }
   dbacc.createUser(req.body, function (err, data) {
      if (err) {
         res.sendStatus(500);
         return;
      }
      res.send(data);
   })
});

module.exports = router;
