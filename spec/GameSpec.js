'use strict'
describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should contain a rollHistory object", function() {
    expect(game.rollHistory).toEqual({
      1: [], 2: [] , 3: [], 4:[], 5:[], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
    });
  });

  describe('#roll', function() {

    it("enters a roll in the scorecard", function() {
      game.roll(9);
      expect(game.rollHistory).toEqual({
        1: [9], 2: [] , 3: [], 4:[], 5:[], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
      });
    });

    it("enters a second roll in the scorecard", function() {
      game.roll(9);
      game.roll(1);
      expect(game.rollHistory).toEqual({
        1: [9, 1], 2: [] , 3: [], 4:[], 5:[], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
      });
    });

    it("enters a third roll in the scorecard", function() {
      game.roll(9);
      game.roll(1);
      game.roll(0);
      expect(game.rollHistory).toEqual({
        1: [9, 1], 2: [0] , 3: [], 4:[], 5:[], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
      });
    });

    it("switches frame when the first roll of a frame is a strike", function() {
      game.roll(10);
      game.roll(1);
      expect(game.rollHistory).toEqual({
        1: [10], 2: [1] , 3: [], 4:[], 5:[], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
      });
    });

    it("enters a ten frames in the scorecard", function() {
      for (var i = 0; i < 10; i++) {
        game.roll(8);
        game.roll(1);
      }
      expect(game.rollHistory).toEqual({
        1: [8, 1], 2: [8, 1], 3: [8, 1], 4: [8, 1], 5: [8, 1],
        6: [8, 1], 7: [8, 1], 8: [8, 1], 9: [8, 1], 10: [8, 1], 11: []
      });
    });

    it("doesn't register an 11th frame if there was no strike or spare in the 10th", function() {
      for (var i = 0; i < 10; i++) {
        game.roll(8);
        game.roll(1);
      }
      game.roll(3);
      expect(game.rollHistory).toEqual({
        1: [8, 1], 2: [8, 1], 3: [8, 1], 4: [8, 1], 5: [8, 1],
        6: [8, 1], 7: [8, 1], 8: [8, 1], 9: [8, 1], 10: [8, 1], 11: []
      });
    });

    it("registers only one roll in the 11th frame if there was a spare in the 10th", function() {
      for (var i = 0; i < 9; i++) {
        game.roll(8);
        game.roll(1);
      }
      game.roll(8);
      game.roll(2);
      game.roll(3);
      game.roll(3);
      expect(game.rollHistory).toEqual({
        1: [8, 1], 2: [8, 1], 3: [8, 1], 4: [8, 1], 5: [8, 1],
        6: [8, 1], 7: [8, 1], 8: [8, 1], 9: [8, 1], 10: [8, 2], 11: [3]
      });
    });

    it("registers two rolls in the 11th frame if there was a strike in the 10th", function() {
      for (var i = 0; i < 9; i++) {
        game.roll(8);
        game.roll(1);
      }
      game.roll(10);
      game.roll(3);
      game.roll(3);
      game.roll(3);      
      expect(game.rollHistory).toEqual({
        1: [8, 1], 2: [8, 1], 3: [8, 1], 4: [8, 1], 5: [8, 1],
        6: [8, 1], 7: [8, 1], 8: [8, 1], 9: [8, 1], 10: [10], 11: [3, 3]
      });
    });

  });

});
