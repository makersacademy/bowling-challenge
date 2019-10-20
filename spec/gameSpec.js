'use strict';

describe('Game', function() {
  var game

  beforeEach(function() {
    game = new Game();
  });

  describe('addBowl', function() {

    it("adds a bowl to an empty scorecard", function() {
      game.addBowl(5);
      expect(game.frames[0][0]).toEqual(5);
    });

    it("adds another bowl to a score card containing one bowl", function() {
      game.addBowl(5);
      game.addBowl(2);
      expect(game.frames[0][1]).toEqual(2);
    });

    it("adds a third bowl to a new frame", function() {
      game.addBowl(5);
      game.addBowl(2);
      game.addBowl(8);
      expect(game.frames[1][0]).toEqual(8);
    });

    it("adds a strike on the first bowl and ends the turn", function() {
      game.addBowl(10);
      expect(game.frames[0][0]).toEqual(10);
      expect(game.frames[0][1]).toEqual(0);
    });

    it("adds a spare to the scorecard", function() {
      game.addBowl(4);
      game.addBowl(6);
      expect(game.frames[0][0]).toEqual(4);
      expect(game.frames[0][1]).toEqual(6);
    });

    it("does not allow a single bowl of more than 10 pins", function() {
      game.addBowl(11);
      expect(game.frames[0][0]).not.toEqual(11);
    });

    it("does not allow a combined bowl of more than 10 pins", function() {
      game.addBowl(6);
      game.addBowl(7);
      expect(game.frames[0][0]).toEqual(6);
      expect(game.frames[0][1]).not.toEqual(7);
    });

  });

  describe('calculateScore', function() {

    it("calculates the total score of less than 10 for 1 frame ", function() {
      game.addBowl(6);
      game.addBowl(1);
      game.calculateScore();
      expect(game.total_score).toEqual(7);
    });

    it("calculates the total score of less than 10 for 2 frames", function() {
      game.addBowl(5);
      game.addBowl(2);
      game.addBowl(2);
      game.addBowl(7);
      game.calculateScore();
      expect(game.total_score).toEqual(16);
    });

    it("Adds a bonus score to the first frame strike, after the second frame", function() {
      game.addBowl(10);
      game.addBowl(3);
      game.addBowl(1);
      game.calculateScore();
      expect(game.total_score).toEqual(18);
    });

    it("calculates the correct score for 2 strikes and then a score below 10", function() {
      game.addBowl(10);
      game.addBowl(10);
      game.addBowl(3);
      game.addBowl(0);
      game.calculateScore();
      expect(game.total_score).toEqual(39);
    });

    it("calculates the correct score for 3 strikes and then a score below 10", function() {
      game.addBowl(10);
      game.addBowl(10);
      game.addBowl(10);
      game.addBowl(4);
      game.addBowl(0);
      game.calculateScore();
      expect(game.total_score).toEqual(72);
    });

    it("Adds a bonus score for a spare followed by a score of 2 and 6", function() {
      game.addBowl(1);
      game.addBowl(9);
      game.addBowl(2);
      game.addBowl(6);
      game.calculateScore();
      expect(game.total_score).toEqual(20);
    });

  });

});
