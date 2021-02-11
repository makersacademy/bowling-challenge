'use strict';

describe('Game', () => {
  var Frame;
  var game;

  beforeEach(() => {
  Frame = jasmine.createSpyObj('Frame', ['knocked', 'isInPlay', 'score', 'isStrike', 'isSpare']);
  game = new Game(Frame);
  });

  describe('constructor', () => {

    it('has property frames, with array of frame objects', () => {
      expect(game.frames()).toEqual([Frame]);
    });

  });

  describe('roll', () => {
    it('calls the knocked function on the current frame', () => {
      game.roll(3);
      expect(Frame.knocked).toHaveBeenCalled();
    });

    it('adds new frame objects to the frames property appropriately', () => {
      Frame.isInPlay.and.returnValue(false);
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