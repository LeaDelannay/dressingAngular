var request = require("request");
var baseUrl = "http://localhost:3000/api/categories";

describe('teste le fichier categories.js - ', function() {
   describe("GET /", function() {
      it("teste que la fonction get / renvoie le code http 200", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le libellé de la catégorie", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(body).toContain("LIBEL_CAT");
            done();
         });
      });
   });
   describe("GET /categoryname/", function() {
      it("teste que la fonction get /categoryname/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/categoryname/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne le libellé de la catégorie", function(done) {
         request.get(baseUrl+"/categoryname/", function(error, response, body) {
            expect(body).toContain("LIBEL_CAT");
            done();
         });
      });
   });
   describe("GET /:idCategory/", function() {
      it("teste que la fonction get /:idCategory/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/2/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le libellé de la catégorie", function(done) {
         request.get(baseUrl+"/2/", function(error, response, body) {
            expect(body).toContain("LIBEL_CAT");
            done();
         });
      });
   });

});
