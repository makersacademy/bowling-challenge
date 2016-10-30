'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('starts with zero points', function() {
    expect(game.calculateScore()).toEqual(0);
  });

  it('can add points', function() {
    game.bowl(8);
    game.bowl(1);
    expect(game.calculateScore()).toEqual(9);
  });

  it('knows what turn it is/what frame it is on', function() {
    game.bowl(8);
    game.bowl(1);
    game.bowl(4);
    expect(game.calculateFrameNumber()).toEqual(2);
  });

  it('knows what frame it is on, even with several strikes', function() {
    game.bowl(10);
    game.bowl(10);
    game.bowl(3);
    game.bowl(5);
    game.bowl(10);
    game.bowl(3);
    expect(game.calculateFrameNumber()).toEqual(5);
  });

  describe('for strikes', function() {
    it('calculates correct score with strikes', function() {
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(26);
    });

     it("doesn't calculate strike total until enough turns have been taken", function() {
      game.bowl(4);
      game.bowl(4);
      game.bowl(10);
      expect(game.calculateScore()).toEqual(8);
     });

    it('calculates correct score with two strikes in a row', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(50);
    });

    it("doesn't calculate strike total until enough turns have been taken - double strike", function() {
     game.bowl(4);
     game.bowl(4);
     game.bowl(10);
     game.bowl(10);
     expect(game.calculateScore()).toEqual(8);
    });

    it('calculates correct score with three strikes in a row', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(80);
    });
  });

  describe('for spares', function() {
    it('calculates correct score with spares', function() {
      game.bowl(3);
      game.bowl(7);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(14);
    });

    it('calculates correct score with spares among other shots', function() {
      game.bowl(3);
      game.bowl(5);
      game.bowl(4);
      game.bowl(4);
      game.bowl(4);
      game.bowl(6);
      game.bowl(8);
      game.bowl(0);
      game.bowl(0);
      game.bowl(5);
      expect(game.calculateScore()).toEqual(47);
    });

    it('calculates correct score for multiple spares', function() {
      game.bowl(3);
      game.bowl(5);
      game.bowl(4);
      game.bowl(6);
      game.bowl(3);
      game.bowl(7);
      game.bowl(8);
      game.bowl(0);
      expect(game.calculateScore()).toEqual(47);
    });
  });

  describe('random feature tests with different strike combos (for my sanity)', function() {
    it('calculates correct score with random strikes in a row', function() {
      game.bowl(4);
      game.bowl(4);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      game.bowl(3);
      game.bowl(2);
      expect(game.calculateScore()).toEqual(93);
    });

    it('calculates correct score with random strikes in a row', function() {
      game.bowl(4);
      game.bowl(4);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      expect(game.calculateScore()).toEqual(38);
    });

    it('calculates correct score with random strikes in a row', function() {
      game.bowl(4);
      game.bowl(4);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.calculateScore()).toEqual(88);
    });

    it('calculates correct score for multiple random spares & strikes', function() {
      game.bowl(3);
      game.bowl(5);
      game.bowl(10);
      game.bowl(4);
      game.bowl(6);
      game.bowl(3);
      game.bowl(7);
      game.bowl(10);
      game.bowl(10);
      game.bowl(8);
      game.bowl(0);
      expect(game.calculateScore()).toEqual(115);
    });
  });

  describe("game over", function() {

    it('knows the game is over', function() {
      for (var i = 1; i <= 10; i++) {
        console.log("turn" + (i+1))
        game.bowl(3);
        game.bowl(5);
      }
    expect(game.isOver()).toEqual(true);
    });

  });

  describe("spare/strike in final frame", function() {
    it('calculates correct score with spare', function() {
      for (var i = 1; i <= 9; i++) {
        game.bowl(3);
        game.bowl(5);
      }
      game.bowl(3);
      game.bowl(7);
      game.bowl(5);
      expect(game.calculateScore()).toEqual(87);
    });

    it('calculates correct score with strike', function() {
      for (var i = 1; i <= 9; i++) {
        console.log("turn: " + i)
        game.bowl(4);
        game.bowl(4);
      }
      game.bowl(10);
      game.bowl(7);
      game.bowl(1);
      expect(game.calculateScore()).toEqual(90);
    });

    it('calculates correct score with 3 final strikes', function() {
      for (var i = 1; i <= 9; i++) {
        console.log("turn: " + i)
        game.bowl(4);
        game.bowl(4);
      }
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      expect(game.calculateScore()).toEqual(102);
    });

    it('calculates correct score with a strike then a spare', function() {
      for (var i = 1; i <= 9; i++) {
        console.log("turn: " + i)
        game.bowl(4);
        game.bowl(4);
      }
      game.bowl(10);
      game.bowl(5);
      game.bowl(5);
      expect(game.calculateScore()).toEqual(92);
    });
  });

});
