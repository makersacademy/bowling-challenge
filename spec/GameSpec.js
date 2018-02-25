'use strict';

describe('Game', function() {

  var game;
  var frame

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('begins with a frame index of 1', function() {
    expect(game.frameIndex).toEqual(1);
  });

  it('begins with first frame already stored in the frames array', function() {
    expect(game.frames[0]).toEqual(frame);
  });

  describe('nextFrame', function() {

    beforeEach(function() {
      game.nextFrame();
    });

    it('adds next frame to the frames array', function() {
      expect(game.frames[1]).toEqual(frame);
    });

    it('increases the frameIndex by 1', function() {
      expect(game.frameIndex).toEqual(2);
    });
  });

  describe('score', function() {
    var rollMany = function (pins, rolls) {
      for (var i = 0; i < rolls; i++) {
        game.roll(pins);
      }
    };

    it('can roll a gutter game', function() {
      rollMany(0, 20);
      expect(game.score()).toBe(0);
    });

    it('can roll a game of ones', function() {
      rollMany(1, 20);
      expect(game.score()).toBe(20);
    });

    it('can roll a spare', function() {
      game.roll(5);
      game.roll(5);
      game.roll(3);
      rollMany(0, 17);
      expect(game.score()).toBe(16);
    });

    it('can roll a strike', function() {
      game.roll(10);
      game.roll(5);
      game.roll(3);
      rollMany(0, 16);
      expect(game.score()).toBe(26);
    });

    it('can roll a perfect game', function() {
      rollMany(10, 12);
      expect(game.score()).toBe(300);
    });
  });

});
