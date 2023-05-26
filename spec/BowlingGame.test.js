const {BowlingGame} = require('../lib/index');
const Frame = require('../lib/Frame');

// auto mocks the frame class
jest.mock('../lib/Frame');
let mockFrame = new Frame();
let bowlingGame = new BowlingGame(mockFrame);

// this creates a new game instance before each test
beforeEach(() => {
  mockFrame = new Frame();
  bowlingGame = new BowlingGame(mockFrame);
  Frame.mockClear();
});

describe('BowlingGame class', () => {
  it('constructs', () => {
    expect(bowlingGame).toBeTruthy();
    expect(bowlingGame).toHaveProperty('currentFrame', mockFrame);
  });

  describe('RollResult method', () => {
    it('adds the result of a regular frame to the current frame', () => {
      bowlingGame.rollResult(2);
      bowlingGame.rollResult(4);

      expect(mockFrame.addRoll).toHaveBeenCalledTimes(2);
      expect(mockFrame.addRoll).toHaveBeenNthCalledWith(1, 2);
      expect(mockFrame.addRoll).toHaveBeenNthCalledWith(2, 4);
    });
  });

  describe('checkFrameEnd method', () => {
    it('placeholder', () => {
      // test here
    });
  });
});
