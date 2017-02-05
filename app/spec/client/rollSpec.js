var Roll = require('../../public/javascripts/roll');

describe("roll", function(){

  var testRoll;

  beforeEach(function(){
    testRoll = new Roll();
  });

  describe("#getScore", function(){
    it("returns the score", function(){
      expect(testRoll.getScore()).toEqual(0);
    });

  });

});
