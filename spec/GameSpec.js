const Game = require('../src/Game');
const FrameHistory = require('../src/FrameHistory');
const Frame = require('../src/Frame');
const Rules = require('../src/Rules');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game(FrameHistory);
  });

  describe('initially', () => {
    it('has a maximum frame amount', () => {
      expect(game.maxFrames).toEqual(10);
    });

    it('has an empty game history', () => {
      expect(game.history).toEqual(new FrameHistory());
    });
  });
});
