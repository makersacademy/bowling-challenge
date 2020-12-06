'use strict';

describe('Game', () => {
  var frame;
  var game;

  beforeEach(() => {
  frame = jasmine.createSpyObj('frame', ['knocked', 'isInPlay', 'score', 'isStrike', 'isSpare']);
  game = new Game(frame);
  });

  describe('constructor', () => {

    it('has property frames, with array of frame objects', () => {
      expect(game.frames()).toEqual([frame]);
    });

  });

  describe('standard frame', () => {
    xit('calls the knocked function on the current frame', () => {
      game.roll(3);
      expect(game.currentFrame().knocked).toHaveBeenCalled();
    });

    it('adds new frame objects to the frames property appropriately', () => {
      frame.isInPlay.and.returnValue(false);
      game.roll(3);
      expect(game.frames().length).toEqual(2);
    });

    xit('awards bonus points appropriately', () => {

    });
  });

  describe('total score', () => {
    it('calculates the total score of the game', () => {
      var frames = [{_score: 30}, {_score: 10}]
      expect(game.totalScore(frames)).toEqual(40);
    });
  });

  });