var request = require("request");
var baseUrl = "http://localhost:3000/api/clothes";

describe('teste le fichier clothes.js - ', function() {
   describe("GET /", function() {
      it("teste que la fonction get / renvoie le code http 200", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le nom du vêtement", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(body).toContain("NOM_VET");
            done();
         });
      });
   });
   describe("GET /clothename/", function() {
      it("teste que la fonction get /clothename/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/clothename/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le nom du vêtement", function(done) {
         request.get(baseUrl+"/clothename/", function(error, response, body) {
            expect(body).toContain("NOM_VET");
            done();
         });
      });
   });
   describe("GET /:idClothe/", function() {
      it("teste que la fonction get /:idClothe/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/1/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le nom du vêtement", function(done) {
         request.get(baseUrl+"/1/", function(error, response, body) {
            expect(body).toContain("NOM_VET");
            done();
         });
      });
   });

});
