// importation du module mysql
var mysql = require('mysql');
console.log('Get connection ...');

var connex = mysql.createConnection({
  database: 'dressing',
  host: "localhost",
  user: "root",
  password: ""
});

//CLOTHES
//LISTE DE TOUS LES VETEMENTS EN BASE DE DONNEES - ALL
module.exports.readClothes = function(fct){
   connex.query('SELECT * FROM vetement ORDER BY NOM_VET ASC', (err, results)=>{
      if(err){
         console.error(err);
         fct(err, null);
         connex.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//CARACTERISTIQUES
//LISTE DE TOUTES LES CARACTERISTIQUES EN BASE DE DONNEES - ALL
module.exports.readCaracteristiques = function(fct){
   connex.query('SELECT * FROM caracteristique ORDER BY LIBEL_CARACT ASC', (err, results)=>{
      if(err){
         console.error(err);
         fct(err, null);
         connex.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}