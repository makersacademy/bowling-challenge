"use strict";

describe("A Game", function() {

  var game;

  beforeEach(function() {
      game = new Game();
  });

  describe("::new", function() {
    it("creates a new Game instance", function() {
      expect(game instanceof Game).toBe(true);
    });
  });

  describe("#roll", function() {

    it("a zero game", function() {
      rollMany(20, 0);
      expect(game.score()).toEqual(0);
    });

    it("can roll a game of ones", function() {
      rollMany(20, 1);
      expect(game.score()).toEqual(20);
    });

    it("can roll a spare", function() {
      game.roll(7);
      game.roll(3); //spare
      game.roll(3);
      rollMany(17, 0);
      expect(game.score()).toEqual(16);
    });

  });


  var rollMany = function(rolls, pins) {
    for (var i = 0; i < rolls; i++) { game.roll(pins); }
  };

  // var rollKnocksDown = function(pins) {
  //   spyOn(game, 'roll').and.returnValue(pins);
  // };

});
