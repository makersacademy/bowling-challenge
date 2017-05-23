// var Game = require('../src/game.js');

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('has a default player name of Player 1 if no name is given', function() {
    expect(game.playerName).toBe('Player 1');
  });

  it('stores the player name if one is specified', function() {
    game = new Game('Simon');
    expect(game.playerName).toBe('Simon');
  });

  it('keeps track of the frame number and starts with 0', function() {
    expect(game.currentFrame).toEqual(0);
  });

  it('has an array for storing frames', function() {
    expect(game.frames).toEqual({});
  });

  describe('newFrame', function() {
    it('updates the frame number each time a new frame is started', function() {
      game.newFrame();
      expect(game.currentFrame).toEqual(1);
      game.newFrame();
      expect(game.currentFrame).toEqual(2);
      for (i=1; i<=5; i++) {
        game.newFrame();
      }
      expect(game.currentFrame).toEqual(7);
    });

    it('will not allow more than 10 frames in a game', function() {
      for (i=1; i<=20; i++) {
        game.newFrame();
      }
      expect(game.currentFrame).toEqual(10);
    });
  });

  describe('addScore', function() {
    it('takes the no. of pins knocked over and saves it to the current frame', function() {
      game.newFrame();
      game.addScore(8);
      expect(game.frames['frame 1'].pinsKnockedDown).toContain(8);
      game.addScore(2);
      expect(game.frames['frame 1'].pinsKnockedDown).toContain(8, 2);
    });
  });

  describe('getFrameScore', function() {
    it('gets the array of scores from a specified frame', function() {
      game.newFrame();
      game.addScore(1);
      game.addScore(3);
      expect(game.getFrameScore(1)).toEqual([1, 3]);
    });
  });

  describe('getScore', function() {
    it('returns the score total at any given time', function() {
      game.newFrame();
      game.addScore(10);
      game.newFrame();
      game.addScore(5);
      game.addScore(4);
      expect(game.getScore()).toEqual(28);
      game.newFrame();
      game.addScore(8);
      game.addScore(1);
      expect(game.getScore()).toEqual(37);
      game.newFrame();
      game.addScore(8);
      game.addScore(2);
      expect(game.getScore()).toEqual(47);
      game.newFrame();
      game.addScore(5);
      game.addScore(2);
      expect(game.getScore()).toEqual(59);
    });

    it('returns a Perfect score of 300 if every bowl results in a strike', function() {
      for (i=1; i<=9; i++) {
        game.newFrame();
        game.addScore(10);
      }
      game.newFrame();
      for (i=1; i<=3; i++) {
        game.addScore(10);
      }
      expect(game.getScore()).toEqual(300);
    });
  });

});
