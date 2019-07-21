var request = require("request");
var baseUrl = "http://localhost:3000/api/notes";

describe('teste le fichier notes.js - ', function() {
   describe("GET /", function() {
      it("teste que la fonction get / renvoie le code http 200", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le numéro de la note", function(done) {
         request.get(baseUrl, function(error, response, body) {
            expect(body).toContain("NUM_NOTE");
            done();
         });
      });
   });
   describe("GET /:idNote/", function() {
      it("teste que la fonction get /:idFeature/ renvoie le code http 200", function(done) {
         request.get(baseUrl+"/4/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("retourne au moins le numéro de la note", function(done) {
         request.get(baseUrl+"/4/", function(error, response, body) {
            expect(body).toContain("NUM_NOTE");
            done();
         });
      });
   });

});
