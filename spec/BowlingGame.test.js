const {BowlingGame} = require('../lib/index');
const Frame = require('../lib/Frame');

// auto mocks the frame class
jest.mock('../lib/Frame');

// this creates a new game instance before each test
beforeEach(() => {
  Frame.mockClear();
});

describe('BowlingGame class', () => {
  it('constructs', () => {
    const mockFrame = new Frame();
    bowlingGame = new BowlingGame(mockFrame);
    expect(bowlingGame).toBeTruthy();
    expect(bowlingGame).toHaveProperty('currentFrame', mockFrame);
  });

  describe('RollResult method', () => {
    it('adds the result of a regular frame to the current frame', () => {
      const mockFrame = new Frame();
      bowlingGame = new BowlingGame(mockFrame);

      bowlingGame.rollResult(2);
      bowlingGame.rollResult(4);

      expect(mockFrame.addRoll).toHaveBeenCalledTimes(2);
      expect(mockFrame.addRoll).toHaveBeenNthCalledWith(1, 2);
      expect(mockFrame.addRoll).toHaveBeenNthCalledWith(2, 4);
    });
  });
});
