var request = require('request');

var base_url = "http://localhost:3000/";

describe("Bowling App Server", function(){
  describe("GET /", function(){
    it("returns status code 200", function(){
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
