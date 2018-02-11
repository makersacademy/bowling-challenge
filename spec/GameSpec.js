const Game = require('../src/Game');
const FrameHistory = require('../src/FrameHistory');
const Frame = require('../src/Frame');
const Rules = require('../src/Rules');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game(FrameHistory, Frame, Rules);
  });

  describe('initially', () => {
    it('has a maximum frame amount', () => {
      expect(game.maxFrames).toEqual(10);
    });

    it('has an empty game history', () => {
      expect(game.history).toEqual(new FrameHistory());
    });
  });

  describe('#startFrame', () => {
    it('starts a new frame', () => {
      game.startFrame();

      expect(game.currentFrame).toEqual(new Frame(Rules));
    });

    it('increments frame counter', () => {
      game.startFrame();

      expect(game.frameNumber).toEqual(1);
    });

    it('will not start a new frame if it is final frame', () => {
      game.frameNumber = game.maxFrames - 1;

      expect(() => { game.startFrame(); }).toThrowError('Need to start final frame');
    });
  });

  describe('#finishFrame', () => {
    beforeEach(() => {
      game.startFrame();
    });

    it('finishes a frame', () => {
      game.finishFrame();

      expect(game.history.size).toEqual(1);
    });

    it('updates the running total', () => {
      game.currentFrame.bowl(5);
      game.currentFrame.bowl(5);
      game.finishFrame();

      expect(game.runningTotal).toEqual(10);
    });
  });
});
