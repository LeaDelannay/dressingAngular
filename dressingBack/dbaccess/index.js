// importation du module mysql
var mysql = require('mysql');
console.log('Get connection ...');

var connection = mysql.createConnection({
   database: 'dressing',
   host: "localhost",
   user: "root",
   password: ""
});


//MARQUES
//LISTE DE TOUTES LES MARQUES EN BASE DE DONNEES - ALL
module.exports.readBrands = function (fct) {
   connection.query('SELECT * FROM marque ORDER BY NOM_MARQUE ASC', (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE MARQUE SPECIFIQUE
module.exports.readSpecificBrand = function (idBrand, fct) {
   var sql = "SELECT * FROM vetement inner join marque on vetement.FK_ID_MARQUE = marque.ID_MARQUE WHERE marque.ID_MARQUE = ? ORDER BY NOM_VET ASC";
   var inserts = [idBrand];
   connection.query(mysql.format(sql, inserts), (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//CATEGORIES
//LISTE DE TOUTES LES CATEGORIES EN BASE DE DONNEES - ALL
module.exports.readCategories = function (fct) {
   connection.query('SELECT * FROM categorie ORDER BY LIBEL_CAT ASC', (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE CATEGORIE SPECIFIQUE
module.exports.readSpecificCategory = function (idCategory, fct) {
   var sql = "SELECT * FROM vetement inner join categorie on vetement.FK_ID_CAT = categorie.ID_CAT WHERE categorie.ID_CAT = ? ORDER BY NOM_VET ASC";
   var inserts = [idCategory];
   connection.query(mysql.format(sql, inserts), (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//CLOTHES
//LISTE DE TOUS LES VETEMENTS EN BASE DE DONNEES - ALL
module.exports.readClothes = function (fct) {
   connection.query('SELECT * FROM vetement ORDER BY NOM_VET ASC', (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//CREATION D'UN VETEMENT EN BASE DE DONNEES
module.exports.createClothe = function (obj, fct) {
   var idVet;

   var sql1 = "INSERT INTO vetement (fk_id_cat, fk_id_marque, fk_id_note, fk_id_user, nom_vet, img_vet, descript_vet) VALUES(?, ?, ?, ?, ?, ?, ?)";
   var inserts1 = [obj.fk_id_cat, obj.fk_id_marque, obj.fk_id_note, obj.fk_id_user, obj.nom_vet, obj.img_vet, obj.descript_vet];

   // création du vêtement en base de données
   connection.query(mysql.format(sql1, inserts1), (err, result) => {
      if (err) {
         console.error(err);
         fct(err, null);
         return;
      }
      //récupération de l'id du vêtement créé
      idVet = result.insertId;

      //création des associations
      var sql2 = "INSERT INTO vet_caract_assoc (ID_VET, ID_CARACT) VALUES(" + idVet + ", ?)";
      var inserts2 = [obj.id_caract];

      connection.query(mysql.format(sql2, inserts2), (err) => {
         if (err) {
            console.error(err);
            fct(err, null);
            return;
         }

         var sql3 = "INSERT INTO vet_coul_assoc (ID_VET, ID_COUL) VALUES(" + idVet + ", ?)";
         var inserts3 = [obj.id_coul];

         connection.query(mysql.format(sql3, inserts3), (err) => {
            if (err) {
               console.error(err);
               fct(err, null);
               return;
            }

            var sql4 = "INSERT INTO vet_occas_assoc (ID_VET, ID_OCCAS) VALUES(" + idVet + ", ?)";
            var inserts4 = [obj.id_occas];

            connection.query(mysql.format(sql4, inserts4), (err) => {
               if (err) {
                  console.error(err);
                  fct(err, null);
                  return;
               }
               fct(null, 200);
               connection.end();
            });
         });
      });
   });
}

//COULEURS
//LISTE DE TOUTES LES COULEURS EN BASE DE DONNEES - ALL
module.exports.readColors = function (fct) {
   connection.query('SELECT * FROM couleur ORDER BY LIBEL_COUL ASC', (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE COULEUR SPECIFIQUE
module.exports.readSpecificColor = function (idColor, fct) {
   var sql = "SELECT * FROM vetement inner join vet_coul_assoc on vetement.id_vet = vet_coul_assoc.id_vet inner join couleur on couleur.id_coul = vet_coul_assoc.id_coul WHERE couleur.ID_COUL = ? ORDER BY NOM_VET ASC";
   var inserts = [idColor];
   connection.query(mysql.format(sql, inserts), (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//CARACTERISTIQUES
//LISTE DE TOUTES LES CARACTERISTIQUES EN BASE DE DONNEES - ALL
module.exports.readFeatures = function (fct) {
   connection.query('SELECT * FROM caracteristique ORDER BY LIBEL_CARACT ASC', (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE CARACTERISTIQUE SPECIFIQUE
module.exports.readSpecificFeature = function (idFeature, fct) {
   var sql = "SELECT * FROM vetement inner join vet_caract_assoc on vetement.id_vet = vet_caract_assoc.id_vet inner join caracteristique on caracteristique.id_caract = vet_caract_assoc.id_caract WHERE caracteristique.ID_CARACT = ? ORDER BY NOM_VET ASC";
   var inserts = [idFeature];
   connection.query(mysql.format(sql, inserts), (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//NOTES
//LISTE DE TOUTES LES NOTES EN BASE DE DONNEES - ALL
module.exports.readNotes = function (fct) {
   connection.query('SELECT * FROM note ORDER BY NUM_NOTE ASC', (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE NOTE SPECIFIQUE
module.exports.readSpecificNote = function (idNote, fct) {
   var sql = "SELECT * FROM vetement inner join note on vetement.fk_id_note = note.id_note WHERE note.id_note = ? ORDER BY NOM_VET ASC";
   var inserts = [idNote];
   connection.query(mysql.format(sql, inserts), (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//OCCASIONS
//LISTE DE TOUTES LES OCCASIONS EN BASE DE DONNEES - ALL
module.exports.readOccasions = function (fct) {
   connection.query('SELECT * FROM occasion ORDER BY LIBEL_OCCAS ASC', (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}

//LISTE DE TOUS LES VETEMENTS POSSEDANT UNE OCCASION SPECIFIQUE
module.exports.readSpecificOccas = function (idOccas, fct) {
   var sql = "SELECT * FROM vetement inner join vet_occas_assoc on vetement.id_vet = vet_occas_assoc.id_vet inner join occasion on occasion.id_occas = vet_occas_assoc.id_occas WHERE occasion.id_occas = ? ORDER BY NOM_VET ASC";
   var inserts = [idOccas];
   connection.query(mysql.format(sql, inserts), (err, results) => {
      if (err) {
         console.error(err);
         fct(err, null);
         connection.end();
         return;
      }
      fct(null, results);
      console.log(results);
   });
}