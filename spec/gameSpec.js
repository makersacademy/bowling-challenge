console.log('gameSpec file has been required correctly')

'use strict';

describe('Game', function () {

  var game;
  var frame;

  beforeEach(function () {
    game = new Game();
    frame = new Frame(); //jasmine.createSpy('frame');
  });

  afterEach(function () {
    game.resetFrame();
  });

  describe('Should be initialized', function () {
    it('with frames being empty', function () {
      expect(game.frames).toEqual([]);
    });

    it('with creating a new frame', function () {
      expect(game.currentFrame).toEqual(frame);
    });

    it('with the score being set to zero', function () {
      expect(game.gameScore).toEqual(0);
    });
  });

  it('should return current frame', function () {
    expect(game.getCurrentFrame()).toEqual(game.currentFrame)
  });

  it('can increase frames', function () {
    game.addFrame(frame);
    expect(game.frames.length).toEqual(1);
    expect(game.frames).toContain(frame);
  });

  describe('Scoring: ', function () {
    it('returns the current score', function () {
      game.bowl(4);
      game.bowl(2);
      expect(game.getCurrentScore()).toEqual(game.gameScore);
      expect(game.gameScore).toEqual(6);
    });

    it('if first miss and second bowl a strike score should be 10', function () {
      game.bowl(0);
      game.bowl(10);
      expect(game.getCurrentScore()).toEqual(game.gameScore);
      expect(game.gameScore).toEqual(10);
    });
  });



  it('resets frames', function () {
    game.bowl();
    game.resetFrame();
    expect(game.frames[0]).not.toEqual(frame);
  });

  it('returns the current frame number', function () {
    game.bowl(); game.bowl(); game.bowl();
    expect(game.getFrameNumber()).toEqual(2)
  });

  it('returns the correct frame number after 2 bowls', function () {
    game.bowl(); game.bowl();
    expect(game.getFrameNumber()).toEqual(2)
  });

  it('resets the game', function () {
    game.resetGame();
    expect(game.frames).toEqual([]);
    expect(game.getCurrentScore()).toEqual(0);
  });

});
