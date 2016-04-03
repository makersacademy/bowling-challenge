'use strict';

describe("Game", function(){

  var game;
  var firstRoll  = {
    numStandingPins:  function() { return 5; },
    numFelledPins:    function() { return 5; },
    isSpare:          function() { return false; },
    isStrike:         function() { return false; }
  };

  var averageFrame = {
    isSpare:          function() { return false; },
    isStrike:         function() { return false; },
    _getRollScores:   function() { return [3,2]; }
  };

  describe("default", function(){

    beforeEach(function(){

      game = Game.createInstance(Roll, Frame);

      spyOn(Frame, "createInstance").and.returnValue(averageFrame);
      spyOn(Roll, "createInstance").and.returnValue(firstRoll);
    });

    it("can create rolls and store them in an array", function(){
      game.roll();
      expect(game.rolls()[0]).toEqual(firstRoll);
    });

    it("can create frames and store them in an array", function(){
      game.roll();
      expect(game.frames()[0]).toEqual(averageFrame);
    });
  });

});
