'use strict';

describe("Game", function() {
    var game;

    beforeEach(function(){
        game = new Game();
    });

    function rollStrike() {
        game.roll(10);
    }

    function rollSpare() {
        game.roll(3);
        game.roll(7);
    }

    it("should score zero for gutter game", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(0)
      }
      expect(game.score()).to.equal(0);
    });

    it("should score 20 for all ones", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(1)
      }
      expect(game.score()).to.equal(20);
    });

    it("scan score a spare", function() {
        rollSpare();
        game.roll(7);
        game.roll(2);
        for (var i = 0; i < 16; i++) {
          game.roll(1)
        }
        expect(game.score()).to.equal(42);
    });

    it("can score a strike", function() {
        rollStrike();
        game.roll(7);
        game.roll(2);
        for (var i = 0; i < 16; i++) {
          game.roll(1)
        }
        expect(game.score()).to.equal(44);
    });

    it("scores 300 for perfect game", function() {
      for (var i = 0; i < 20; i++) {
        rollStrike();
      }
      expect(game.score()).to.equal(300);
    });
});
