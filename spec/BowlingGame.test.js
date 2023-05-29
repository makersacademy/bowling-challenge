const {BowlingGame} = require('../lib/index');
const Frame = require('../lib/Frame');
const BowlingScorecard = require('../lib/BowlingScorecard');

// auto mocks the frame and scorecard class
jest.mock('../lib/Frame');
jest.mock('../lib/BowlingScorecard');
let mockFrame = new Frame();
let mockBowlingScorecard = new BowlingScorecard();
let bowlingGame = new BowlingGame(mockFrame, mockBowlingScorecard);

// this resets a new game instance before each test
beforeEach(() => {
  mockFrame = new Frame();
  mockBowlingScorecard = new BowlingScorecard();
  bowlingGame = new BowlingGame(mockFrame, mockBowlingScorecard);
  Frame.mockClear();
  BowlingScorecard.mockClear();
});

describe('BowlingGame class', () => {
  it('constructs', () => {
    expect(bowlingGame).toBeTruthy();
    expect(bowlingGame).toHaveProperty('currentFrame', mockFrame);
  });

  describe('addRollToFrame method', () => {
    it('adds the result of a regular frame to the current frame', () => {
      bowlingGame.addRollToFrame(2);
      bowlingGame.addRollToFrame(4);

      expect(mockFrame.addRoll).toHaveBeenCalledTimes(2);
      expect(mockFrame.addRoll).toHaveBeenNthCalledWith(1, 2);
      expect(mockFrame.addRoll).toHaveBeenNthCalledWith(2, 4);
    });
  });

  describe('checkFrameEnd method', () => {
    it('adds currentFrame to completedFrames then resets it, if frame is ended', () => {
      bowlingGame.addRollToFrame(10);
      // tells our mock frames isFrameOver method to return true
      mockFrame.isFrameOver.mockImplementation(() => true);
      bowlingGame.checkFrameEnd();
      expect(mockFrame.isFrameOver).toHaveBeenCalledTimes(1);
      expect(bowlingGame.completedFrames).toEqual([mockFrame]);
      // checks that the method has reset the current frame
      expect(bowlingGame.currentFrame).not.toEqual(bowlingGame.completedFrames[0]);
    });

    it('does nothing if frame is ongoing', () => {
      bowlingGame.addRollToFrame(5);
      // tells our mock frames isFrameOver method to return false
      mockFrame.isFrameOver.mockImplementation(() => false);
      bowlingGame.checkFrameEnd();
      expect(mockFrame.isFrameOver).toHaveBeenCalledTimes(1);
      expect(bowlingGame.completedFrames).toEqual([]);
    });
  });

  describe('getTotalScore method', () => {
    it( 'returns score of a regular game ', () => {
    // 10 regular frames
      for (let i = 1; i <= 10; i++) {
        bowlingGame.addRollToFrame(2);
        bowlingGame.addRollToFrame(2);
        bowlingGame.checkFrameEnd();
      }

      expect(bowlingGame.getTotalScore()).toBe(40);
    });
  });
});
