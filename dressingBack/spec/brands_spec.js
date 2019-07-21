var request = require("request");
var baseUrl = "http://localhost:3000/api/brands";

describe('teste le fichier brand.js - ', function() {
   describe("GET /", function() {
      it("teste que la fonction get / renvoie le code http 200", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le nom de la marque", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(body).toContain("NOM_MARQUE");
            done();
         });
      });
   });
   describe("GET /brandname/", function() {
      it("teste que la fonction get /brandname/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/brandname/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne le nom de la marque", function(done) {
         request.get(baseUrl+"/brandname/", function(error, response, body) {
            expect(body).toContain("NOM_MARQUE");
            done();
         });
      });
   });
   describe("GET /:idBrand/", function() {
      it("teste que la fonction get /:idBrand/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/1/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le nom de la marque", function(done) {
         request.get(baseUrl+"/1/", function(error, response, body) {
            expect(body).toContain("NOM_MARQUE");
            done();
         });
      });
   });

});
