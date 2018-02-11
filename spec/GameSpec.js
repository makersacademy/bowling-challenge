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

      expect(game.currentFrame).toEqual(new Frame(new Rules()));
    });
  });
});
