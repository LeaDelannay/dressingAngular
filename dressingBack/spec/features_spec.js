var request = require("request");
var baseUrl = "http://localhost:3000/api/features";

describe('teste le fichier features.js - ', function() {
   describe("GET /", function() {
      it("teste que la fonction get / renvoie le code http 200", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le libellé de la caractéristique", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(body).toContain("LIBEL_CARACT");
            done();
         });
      });
   });
   describe("GET /featurename/", function() {
      it("teste que la fonction get /featurename/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/featurename/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne le libellé de la caractéristique", function(done) {
         request.get(baseUrl+"/featurename/", function(error, response, body) {
            expect(body).toContain("LIBEL_CARACT");
            done();
         });
      });
   });
   describe("GET /:idFeature/", function() {
      it("teste que la fonction get /:idFeature/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/1/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le libellé de la caractéristique", function(done) {
         request.get(baseUrl+"/1/", function(error, response, body) {
            expect(body).toContain("LIBEL_CARACT");
            done();
         });
      });
   });

});
