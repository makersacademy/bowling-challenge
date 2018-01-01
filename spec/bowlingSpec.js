'use strict';

describe("game", function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it("should initialise with 0/10 rounds bowled", function() {
    expect(game.roundNumber).toEqual(1);
  });
  it("should initialise with a score of 0", function() {
    expect(game.score).toEqual(0);
  });
  describe("next round", function() {
    it("should increment round number", function() {
      game.nextRound();
      expect(game.roundNumber).toEqual(2);
    });
    it("should start each round on throw 1", function() {
      game.throwNumber = 2;
      game.nextRound();
      expect(game.throwNumber).toEqual(1);
    });
    it("should not progress past 10 rounds", function() {
      game.roundNumber = 10;
      expect(function() {
        game.nextRound();
      }).toThrow(new Error("A game is only 10 rounds long"));
      expect(game.roundNumber).toEqual(10);
    });
    it("should start a new round if the throw counter goes past 2", function() {
      game.throwNumber = 3;
      game.bowl(1);
      expect(game.roundNumber).toEqual(2);
      expect(game.throwNumber).toEqual(1);
    });
  });
  describe("bowl", function() {
    it("should add the correct number to the score", function() {
      game.bowl(5);
      expect(game.score).toEqual(5);
    });
    it("should increment throw number", function() {
      game.bowl(5);
      expect(game.throwNumber).toEqual(2);
    });
    it("should not accept bowls over the remaining pins", function() {
      expect(function() {
        game.bowl(11);
      }).toThrow(new Error("You can't bowl higher than the remaining pins"));
    });
    it("should skip to the next round on a strike", function() {
      game.bowl(10);
      expect(game.roundNumber).toEqual(2);
      expect(game.throwNumber).toEqual(1);
    });
    it("should calculate bonuses correctly for a single strike", function() {
      game.bowl(10);
      game.bowl(1);
      game.bowl(1);
      expect(game.score).toEqual(14);
    });
    it("should calculate bonuses correctly for a double strike", function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(1);
      game.bowl(1);
      game.bowl(1);
      expect(game.score).toEqual(36);
    });
    it("should calculate bonuses correctly for a single spare", function() {
      game.bowl(9);
      game.bowl(1);
      game.bowl(1);
      expect(game.score).toEqual(12);
    });
    it("should calculate bonuses correctly for spare then a strike", function() {
      game.bowl(9);
      game.bowl(1);
      game.bowl(10);
      game.bowl(1);
      game.bowl(1);
      expect(game.score).toEqual(34);
    });
    it("should allow two bonus rolls for striking on the 10th round", function() {
      game.roundNumber = 10;
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      expect(game.score).toEqual(30);
      expect(function() {
        game.bowl(1);
      }).toThrow(new Error("Game is over"));
    });
    it("should allow one bonus roll for sparing on the 10th round", function() {
      game.roundNumber = 10;
      game.bowl(1);
      game.bowl(9);
      game.bowl(10);
      expect(game.score).toEqual(20);
      expect(function() {
        game.bowl(1);
      }).toThrow(new Error("Game is over"));
    });
    it("should allow no bonus rolls unless striking or sparing on the 10th round", function() {
      game.roundNumber = 10;
      game.bowl(1);
      game.bowl(1);
      expect(game.score).toEqual(2);
      expect(function() {
        game.bowl(1);
      }).toThrow(new Error("Game is over"));
    });
    it("should calculate the perfect game as 300 points", function() {
      for (var i = 0; i < 12; i++) {
        game.bowl(10);
      }
      expect(game.score).toEqual(300);
    });
    it("should calculate a gutter game as 0 points", function() {
      for (var i = 0; i < 20; i++) {
        game.bowl(0);
      }
      expect(game.score).toEqual(0);
    });
  });
  describe("remaining pins", function() {
    it("should know how many pins remain after a throw", function() {
      game.bowl(4);
      expect(game.remainingPins).toEqual(6);
    });
  });
  describe("bonus", function() {
    it("should be set to [2,0] on a strike", function() {
      game.bowl(10);
      expect(game.bonus).toEqual([2,0]);
    });
    it("should be set to [1,0] on a spare", function() {
      game.bowl(1);
      game.bowl(9);
      expect(game.bonus).toEqual([1,0]);
    });
    it("should be set to [1,2] on a double strike", function() {
      game.bowl(10);
      game.bowl(10);
      expect(game.bonus).toEqual([1,2]);
    });
  });
});
