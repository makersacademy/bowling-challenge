const Game = require('./game');
const Frame = require('./frame');

jest.mock('./frame.js');

describe('Game class unit test', () => {
  beforeEach(() => {
    Frame.mockClear();
  })

  describe('constructor', () => {
    it('initializes with an array of 10 frames', () => {
      const mockFrameClass = jest.fn();
      let game = new Game(mockFrameClass);

      expect(mockFrameClass).toHaveBeenCalledTimes(10);
      expect(mockFrameClass.mock.calls[0][0]).toBe(false);
      expect(mockFrameClass.mock.calls[9][0]).toBe(true);
      expect(game.frames.length).toEqual(10);
    });

    it('initializes with a grand total score of 0', () => {
      const mockFrameClass = jest.fn();
      let game = new Game(mockFrameClass);
      expect(game.grandTotal).toEqual(0);
    });

    it('runs the game', () => {

    });

    it('initializes with a grand total score of 0', () => {
      const mockFrameClass = jest.fn();
      let game = new Game(mockFrameClass);
      expect(game.grandTotal).toEqual(0);
    });
  });
});
