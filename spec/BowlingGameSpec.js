'use strict';

describe ('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('stores a bowl in the correct frame', function() {
    game.bowl(5);
    game.bowl(2);
    expect(game.allFrames[1]).toEqual([5, 2]);
  });

  it('moves onto the next frame after 2 bowls', function() {
    game.bowl(5);
    game.bowl(2);
    game.bowl(10);
    game.bowl(6);
    game.bowl(3);
    expect(game.currentFrame).toEqual(3);
  });

  it('does not allow more than 10 pins to be knowcked down in a frame', function() {
    game.bowl(6);
    game.bowl(5);
    game.bowl(8);
    game.bowl(2);
    expect(game.allFrames[1]).toEqual([6, 2])
  });

  describe ('Calculating scores and bonuses', function() {

    it('adds bonus points to previous frame if there is a spare', function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(3);
      game.bowl(1);
      expect(game.allFrames[1]).toEqual([5, 5, 3]);
      expect(game.allFrames[2]).toEqual([3, 1]);
    });

    it('adds bonus points to previous frame if there are 2 spares', function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(7);
      game.bowl(3);
      game.bowl(2);
      game.bowl(2);
      expect(game.allFrames[1]).toEqual([5, 5, 7]);
      expect(game.allFrames[2]).toEqual([7, 3, 2]);
    });

    it('adds bonus points to previous frame if there is a strike', function() {
      game.bowl(10);
      game.bowl(5);
      game.bowl(1);
      expect(game.allFrames[1]).toEqual([10, 5, 1]);
      expect(game.allFrames[2]).toEqual([5, 1]);
    });

    it('calculates the correct score for a double strike', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(5);
      game.bowl(1);
      game.bowl(6);
      game.bowl(0);
      expect(game.allFrames[1]).toEqual([10, 10, 5]);
      expect(game.allFrames[2]).toEqual([10, 5, 1]);
    });

    it('calculates the total points for the frame', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(9);
      game.bowl(1);
      game.bowl(5);
      game.bowl(5);
      game.bowl(10);
      game.bowl(2);
      game.bowl(4);
      game.bowl(3);
      game.bowl(4);
      game.bowl(5);
      game.bowl(2);
      expect(game.allFramesScore[1]).toEqual(29);
      expect(game.allFramesScore[2]).toEqual(20);
      expect(game.allFramesScore[3]).toEqual(15);
      expect(game.allFramesScore[4]).toEqual(20);
      expect(game.allFramesScore[5]).toEqual(16);
      expect(game.allFramesScore[6]).toEqual(6);
      expect(game.allFramesScore[7]).toEqual(7);
      expect(game.allFramesScore[8]).toEqual(7);
    });



  });
});
