console.log('gameSpec file has been required correctly')

'use strict';

describe('Game', function () {

  var game;
  var frame;

  beforeEach(function () {
    game = new Game();
    frame = new Frame(); //jasmine.createSpy('frame');
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

  it('returns the current score', function () {
    game.bowl();
    game.bowl();
    game.updateScore();
    expect(game.getCurrentScore()).toEqual(game.gameScore);
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

  describe('Bowling', function () {


  });

});
