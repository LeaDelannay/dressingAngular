var express = require('express');
var router = express.Router();

var dbacc = require('../dbaccess');

var rootPath = __dirname; //sert pour l'upload

router.post('/', function (req, res) {
   if (Object.keys(req.files).length == 0) { //est-ce que j'ai envoyé un fichier
      return res.status(400).send("Pas de fichier"); //erreur
   }
   let sampleFile = req.files.file; //fichier file qui est dnas un objet files dans mon req
   let pth = path.join(rootPath, '..', 'down', sampleFile.name) //down = nom du dossier contenant toutes les images. Rootpath = le local. .. = répertoireparent. Samplefile.name =) nom de mon fichier
   sampleFile.mv(pth, function(err){
      if(err){
         console.log(err);
         return res.status(500).send(err);
      }
      res.send('file uploaded'); //ok 
   }) //mv méthode d'upload
   res.send('File upload ok');
});

router.get('/:filename', function(req, res){ //récupérer nom du file dans un input
   let pth = path.join(rootPath, '..', 'down', req.params.filename); // correspond au filename ligne au dessus /:filename
   res.download(pth);
});

module.exports = router;