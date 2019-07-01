var express = require('express');
var router = express.Router();

var dbacc = require('../dbaccess');

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
