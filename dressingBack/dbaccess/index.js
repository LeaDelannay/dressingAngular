// importation du module mysql
var mysql = require('mysql');
console.log('Get connection ...');

var connex = mysql.createConnection({
  database: 'dressing',
  host: "localhost",
  user: "root",
  password: ""
});


//MARQUES
//LISTE DE TOUTES LES MARQUES EN BASE DE DONNEES - ALL
module.exports.readBrands = function(fct){
   connex.query('SELECT * FROM marque ORDER BY NOM_MARQUE ASC', (err, results)=>{
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

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE MARQUE SPECIFIQUE
module.exports.readSpecificBrand = function(idBrand, fct){
   var sql = "SELECT * FROM vetement inner join marque on vetement.FK_ID_MARQUE = marque.ID_MARQUE WHERE marque.ID_MARQUE = ? ORDER BY NOM_VET ASC";
   var inserts = [idBrand];
   connex.query(mysql.format(sql,inserts), (err, results)=>{
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

//CATEGORIES
//LISTE DE TOUTES LES CATEGORIES EN BASE DE DONNEES - ALL
module.exports.readCategories = function(fct){
   connex.query('SELECT * FROM categorie ORDER BY LIBEL_CAT ASC', (err, results)=>{
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

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE CATEGORIE SPECIFIQUE
module.exports.readSpecificCategory = function(idCategory, fct){
   var sql = "SELECT * FROM vetement inner join categorie on vetement.FK_ID_CAT = categorie.ID_CAT WHERE categorie.ID_CAT = ? ORDER BY NOM_VET ASC";
   var inserts = [idCategory];
   connex.query(mysql.format(sql,inserts), (err, results)=>{
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

//COULEURS
//LISTE DE TOUTES LES COULEURS EN BASE DE DONNEES - ALL
module.exports.readColors = function(fct){
   connex.query('SELECT * FROM couleur ORDER BY LIBEL_COUL ASC', (err, results)=>{
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

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE COULEUR SPECIFIQUE
module.exports.readSpecificColor = function(idColor, fct){
   var sql = "SELECT * FROM vetement inner join vet_coul_assoc on vetement.id_vet = vet_coul_assoc.id_vet inner join couleur on couleur.id_coul = vet_coul_assoc.id_coul WHERE couleur.ID_COUL = ? ORDER BY NOM_VET ASC";
   var inserts = [idColor];
   connex.query(mysql.format(sql,inserts), (err, results)=>{
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
module.exports.readFeatures = function(fct){
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

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE CARACTERISTIQUE SPECIFIQUE
module.exports.readSpecificFeature = function(idFeature, fct){
   var sql = "SELECT * FROM vetement inner join vet_caract_assoc on vetement.id_vet = vet_caract_assoc.id_vet inner join caracteristique on caracteristique.id_caract = vet_caract_assoc.id_caract WHERE caracteristique.ID_CARACT = ? ORDER BY NOM_VET ASC";
   var inserts = [idFeature];
   connex.query(mysql.format(sql,inserts), (err, results)=>{
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

//NOTES
//LISTE DE TOUTES LES NOTES EN BASE DE DONNEES - ALL
module.exports.readNotes = function(fct){
   connex.query('SELECT * FROM note ORDER BY NUM_NOTE ASC', (err, results)=>{
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

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE NOTE SPECIFIQUE
module.exports.readSpecificNote = function(idNote, fct){
   var sql = "SELECT * FROM vetement inner join note on vetement.fk_id_note = note.id_note WHERE note.id_note = ? ORDER BY NOM_VET ASC";
   var inserts = [idNote];
   connex.query(mysql.format(sql,inserts), (err, results)=>{
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

//OCCASIONS
//LISTE DE TOUTES LES OCCASIONS EN BASE DE DONNEES - ALL
module.exports.readOccasions = function(fct){
   connex.query('SELECT * FROM occasion ORDER BY LIBEL_OCCAS ASC', (err, results)=>{
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

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE OCCASION SPECIFIQUE
module.exports.readSpecificOccas = function(idOccas, fct){
   var sql = "SELECT * FROM vetement inner join vet_occas_assoc on vetement.id_vet = vet_occas_assoc.id_vet inner join occasion on occasion.id_occas = vet_occas_assoc.id_occas WHERE occasion.id_occas = ? ORDER BY NOM_VET ASC";
   var inserts = [idOccas];
   connex.query(mysql.format(sql,inserts), (err, results)=>{
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