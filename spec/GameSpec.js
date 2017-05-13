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

    beforeEach(function() {
      for (var i = 0; i < 20; i++) {
        game.roll();
      }
    });

    it("a zero game", function() {
      rollDownsPins(0);
      expect(game.score()).toEqual(0);
    });

    it("can roll a games of ones", function() {
      rollDownsPins(1);
      expect(game.score()).toEqual(20);
    });

  });


  var rollDownsPins = function(pins) {
    spyOn(game, 'roll').and.returnValue(pins);
  };

});
