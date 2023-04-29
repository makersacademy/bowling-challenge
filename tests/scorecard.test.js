const Scorecard = require('../models/scorecard.js');
const Frame = require('../models/frame.js');

jest.mock('../models/frame.js');

describe('Scorecard', () => {
  beforeEach(() => {
    Frame.mockClear();
  })

  it("adds frame to the scorecard", () => {
    const mockFrame = new Frame;

    mockFrame.framePoints.mockImplementation(() => [5,3]);

    const scorecard = new Scorecard;
    scorecard.addFrame(mockFrame);
    expect(scorecard.frames.length).toBe(1);
    expect(scorecard.frames[0].framePoints()).toEqual([5, 3]);
  });
});