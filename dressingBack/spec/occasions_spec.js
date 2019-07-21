var request = require("request");
var baseUrl = "http://localhost:3000/api/occasions";

describe('teste le fichier occasions.js - ', function() {
   describe("GET /", function() {
      it("teste que la fonction get / renvoie le code http 200", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le libellé de l'occasion", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(body).toContain("LIBEL_OCCAS");
            done();
         });
      });
   });
   describe("GET /occasionname/", function() {
      it("teste que la fonction get /occasionname/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/occasionname/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne le libellé de l'occasion", function(done) {
         request.get(baseUrl+"/occasionname/", function(error, response, body) {
            expect(body).toContain("LIBEL_OCCAS");
            done();
         });
      });
   });
   describe("GET /:idOccas/", function() {
      it("teste que la fonction get /:idOccas/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/1/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le libellé de l'occasion", function(done) {
         request.get(baseUrl+"/1/", function(error, response, body) {
            expect(body).toContain("LIBEL_OCCAS");
            done();
         });
      });
   });

});
