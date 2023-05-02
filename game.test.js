const Game = require('./game');
const Frame = require('./frame');

jest.mock('./frame.js');

describe('Game class unit test', () => {
  beforeEach(() => {
    Frame.mockClear();

    Frame.mockImplementation(() => { // mock the constructor of Frame to return a mock frame object
      return {
        play: jest.fn(),
        isSpare: jest.fn(),
        isStrike: jest.fn(),
        rolls: [],
        regularPoints: 0,
        bonusPoints: 0,
      }
    }); 
  });

  describe('constructor', () => {
    it('initializes with an array of 10 frames', () => {
      let game = new Game(Frame);
      expect(Frame).toHaveBeenCalledTimes(10);
      expect(game.frames.length).toEqual(10);
    });

    it('initializes with a grand total score of 0', () => {
      let game = new Game(Frame);
      expect(game.grandTotal).toEqual(0);
    });
  });

  describe('.play()', () => {
    it('calls .play on each of the 10 frames without spare or strike in last frame', () => {
      let game = new Game(Frame);
      const scores = [[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 7]];
      game.play(scores);
      game.frames.forEach((frame) => {
        expect(frame.play).toHaveBeenCalledTimes(1);
      });
      expect(game.frames[0].play).toHaveBeenCalledWith(scores[0]);
      expect(game.frames[9].play).toHaveBeenCalledWith(scores[9]);
    })

    it('Score a complex game correctly', () => {
      let game = new Game(Frame);
      const scores = [[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8], [6]];
      game.frames[0].rolls = [1, 4];
      game.frames[0].isSpare.mockImplementation(() => false);
      game.frames[0].isStrike.mockImplementation(() => false);
      game.frames[0].regularPoints = 5;

      game.frames[1].rolls = [4, 5];
      game.frames[1].isSpare.mockImplementation(() => false);
      game.frames[1].isStrike.mockImplementation(() => false);
      game.frames[1].regularPoints = 9;

      game.frames[2].rolls = [6, 4];
      game.frames[2].isSpare.mockImplementation(() => true);
      game.frames[2].isStrike.mockImplementation(() => false);
      game.frames[2].regularPoints = 10;


      game.frames[3].rolls = [5, 5];
      game.frames[3].isSpare.mockImplementation(() => true);
      game.frames[3].isStrike.mockImplementation(() => false);
      game.frames[3].regularPoints = 10;


      game.frames[4].rolls = [10];
      game.frames[4].isStrike.mockImplementation(() => true);
      game.frames[4].isSpare.mockImplementation(() => false);
      game.frames[4].regularPoints = 10;


      game.frames[5].rolls = [0, 1];
      game.frames[5].isSpare.mockImplementation(() => false);
      game.frames[5].isStrike.mockImplementation(() => false);
      game.frames[5].regularPoints = 1;

      game.frames[6].rolls = [7, 3];
      game.frames[6].isSpare.mockImplementation(() => true);
      game.frames[6].isStrike.mockImplementation(() => false);
      game.frames[6].regularPoints = 10;


      game.frames[7].rolls = [6, 4];
      game.frames[7].isSpare.mockImplementation(() => true);
      game.frames[7].isStrike.mockImplementation(() => false);
      game.frames[7].regularPoints = 10;


      game.frames[8].rolls = [10];
      game.frames[8].isStrike.mockImplementation(() => true);
      game.frames[8].isSpare.mockImplementation(() => false);
      game.frames[8].regularPoints = 10;


      game.frames[9].rolls = [2, 8];
      game.frames[9].isSpare.mockImplementation(() => true);
      game.frames[9].isStrike.mockImplementation(() => false);
      game.frames[9].regularPoints = 10;

      game.play(scores);

      expect(game.grandTotal).toEqual(133);
    });
  });
});

