// importation du module mysql
var mysql = require('mysql');
console.log('Get connection ...');

//gestion du pool
// const Pool = require('mysql').Pool;

var connex = mysql.createConnection({
  database: 'dressing',
  host: "localhost",
  user: "root",
  password: ""
});


/* pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */
/* connex.on('connect', ()=>{
   console.log("Connecté à la base de données");
}); */



//CLOTHES
//LECTURE DE CLOTHES EN BASE DE DONNEES - ALL
module.exports.readClothes = function(fct){
   connex.query('SELECT nom_vet FROM vetement', (err, results)=>{
      if(err){
         console.error(err);
         fct(err, null);
         return;
      }
      fct(null, results.rows);
      console.log(results.rows);
   });
}
