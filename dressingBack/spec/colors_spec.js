var request = require("request");
var baseUrl = "http://localhost:3000/api/colors";

describe('teste le fichier colors.js - ', function() {
   describe("GET /", function() {
      it("teste que la fonction get / renvoie le code http 200", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le libellé de la couleur", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(body).toContain("LIBEL_COUL");
            done();
         });
      });
   });
   describe("GET /colorname/", function() {
      it("teste que la fonction get /colorname/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/colorname/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne le libellé de la couleur", function(done) {
         request.get(baseUrl+"/colorname/", function(error, response, body) {
            expect(body).toContain("LIBEL_COUL");
            done();
         });
      });
   });
   describe("GET /:idColor/", function() {
      it("teste que la fonction get /:idColor/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/8/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le libellé de la couleur", function(done) {
         request.get(baseUrl+"/8/", function(error, response, body) {
            expect(body).toContain("LIBEL_COUL");
            done();
         });
      });
   });

});
