"use strict";

describe("FEATURE TEST: In Bowling Game", function() {

  var game;
  game = new Game();

  var numberOfRolls = function(rolls) {
    for (var i = 0; i < rolls; i++) { game.roll(); }
  };

  var rollKnocksDown = function(pins) {
    spyOn(game, 'roll').and.returnValue(pins);
  };

  describe("when I knock over less than ten pins in 1st frame", function() {

    xit("will total my score", function() {
      game.startNew();
      expect(game.frame).toBe(0)
      rollKnocksDown(4);
      numberOfRolls(2);
      expect(game.frame.score).toBe(8);
      expect(game.score).toBe(8);
    });



  });

})
