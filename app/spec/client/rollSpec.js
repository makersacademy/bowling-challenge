var Roll = require('../../public/javascripts/roll');

const Reporter = require('jasmine-console-reporter');
jasmine.getEnv().addReporter(new Reporter());

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

  describe("#setScore", function(){
    it("sets the score", function(){
      testRoll.setScore(5);
      expect(testRoll.getScore()).toEqual(5);
    });
  });

});
