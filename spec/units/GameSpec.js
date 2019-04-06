'use strict'

describe("Game", function() {
  var game;
  var rollFrame;
  var rollSpare;
  var rollStrike;

  beforeEach(function() {
    game = new Game();
    rollFrame = function () {
      game.roll(8);
      game.roll(1);
    };
    rollSpare = function () {
      game.roll(9);
      game.roll(1);
    };
    rollStrike = function () {
      game.roll(10);
    };
  });

  it("should contain a rollHistory object", function() {
    expect(game.rollHistory).toEqual({
      1: [], 2: [] , 3: [], 4:[], 5:[], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
    });
  });

  describe('#roll', function() {

    it("enters a roll in the scorecard", function() {
      game.roll(9);
      expect(game.rollHistory[1][0]).toEqual(9);
    });

    it("enters a second roll in the scorecard", function() {
      rollFrame();
      expect(game.rollHistory[1][1]).toEqual(1);
    });

    it("enters a third roll in the scorecard", function() {
      rollFrame();
      game.roll(0);
      expect(game.rollHistory[2][0]).toEqual(0);
    });

    it("switches frame when the first roll of a frame is a strike", function() {
      game.roll(10);
      game.roll(1);
      expect(game.rollHistory[2][0]).toEqual(1);
    });

    it("enters a ten frames in the scorecard", function() {
      for (var i = 0; i < 10; i++) {
        rollFrame();
      }
      expect(game.rollHistory[10]).toEqual([8, 1]);
    });

    it("doesn't register an 11th frame if there was no strike or spare in the 10th", function() {
      for (var i = 0; i < 11; i++) {
        rollFrame();
      }
      expect(game.rollHistory[11]).toEqual([]);
    });

    it("registers only one roll in the 11th frame if there was a spare in the 10th", function() {
      for (var i = 0; i < 9; i++) {
        rollFrame();
      }
      rollSpare();
      rollFrame();
      expect(game.rollHistory[11]).toEqual([8]);
    });

    it("registers two rolls in the 11th frame if there was a strike in the 10th", function() {
      for (var i = 0; i < 9; i++) {
        rollFrame();
      }
      rollStrike();
      rollFrame();
      expect(game.rollHistory[11]).toEqual([8, 1]);
    });

    it("registers a perfect game", function() {
      for (var i = 0; i < 12; i++) {
        rollStrike();
      }
      expect(game.rollHistory[11]).toEqual([10, 10]);
    });

  });

  it("should contain a scoreCard object", function() {
    expect(game.scoreCard).toEqual({
      1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""
    });
  });

  describe('#score', function() {

    it("scores the scoreCard after a normal frame", function () {
      rollFrame();
      game.score();
      expect(game.scoreCard[1]).toEqual(9);
    });

    it("adds bonus points after a strike", function () {
      rollStrike();
      rollFrame();
      rollFrame();
      game.score();
      expect(game.scoreCard[1]).toEqual(19);
    });

    it("adds bonus points after a spare", function () {
      rollSpare();
      rollFrame();
      game.score();
      expect(game.scoreCard[1]).toEqual(18);
    });

    it("adds bonus points after a spare on the 10th frame", function () {
      for (var i = 0; i < 9; i++) {
        rollFrame();
      }
      rollSpare();
      rollFrame();
      game.score();
      expect(game.scoreCard[10]).toEqual(18);
    });

    it("adds bonus points after a strike on the 10th frame", function () {
      for (var i = 0; i < 9; i++) {
        rollFrame();
      }
      rollStrike();
      rollFrame();
      game.score();
      expect(game.scoreCard[10]).toEqual(19);
    });

    it("scores a turkey", function () {
      for (var i = 0; i < 3; i++) {
        rollStrike();
      }
      game.score();
      expect(game.scoreCard[1]).toEqual(30);
    });

  });

  describe("#accumulate", function () {
    it("provides the cumulative score at a given frame", function () {
      for (var i = 0; i < 10; i++) {
        rollFrame();
      };
      game.score();
      expect(game.accumulate(5)).toEqual(45);
    });
  });

});
