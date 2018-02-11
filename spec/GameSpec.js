const Game = require('../src/Game');

describe('Game', () => {
  let game;
  let FrameHistory;

  beforeEach(() => {
    FrameHistory = jasmine.createSpy('FrameHistory');
    game = new Game(FrameHistory);
  });

  describe('initially', () => {
    it('has a maximum frame amount', () => {
      expect(game.maxFrames).toEqual(10);
    });

    it('has an empty game history', () => {
      expect(game.history).toBe(FrameHistory);
    });
  });
});
