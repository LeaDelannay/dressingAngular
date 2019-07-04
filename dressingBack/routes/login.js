var express = require('express');
var router = express.Router();
var passport = require('passport');
//générateur de jeton JWT
var jsonwebtoken = require('jsonwebtoken');
//paramètre de génération
var opts = {
   secretOrKey: 'secret'
};

router.post('/', passport.authenticate('local', {
   successRedirect: '/',
   failureRedirect: '/formulaireLogin.html',
   failureFlash: false
}));

router.post('/jwt', (req, res) => {
   //génération du jeton
   var jeton = jsonwebtoken.sign({
      id: req.body.username
   }, opts.secretOrKey);
   //reponse au client
   res.send({
      token: jeton
   });
});

router.get('/testjwt', passport.authenticate('jwt', {
   session: false
}), (req, res) => {
   res.send({
      message: "C'est OK ! "
   });
});

module.exports = router;