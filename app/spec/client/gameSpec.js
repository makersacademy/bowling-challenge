var Game = require('../../public/javascripts/game');

describe("Game", function(){

  var testGame;
  var roll;

  beforeEach(function(){
    testGame = new Game();
    roll = jasmine.createSpy('roll');
  });

  describe("#addRoll", function(){
    it("Adds a roll to the rolls array", function(){
      testGame.addRoll(roll);
      expect(testGame._rolls).toContain(roll);
    });
  });

  describe("#getRolls", function(){
    it("Returns the rolls array", function(){
      testGame.addRoll(roll);
      expect(testGame.getRolls()).toEqual([roll]);
    });
  });


});
