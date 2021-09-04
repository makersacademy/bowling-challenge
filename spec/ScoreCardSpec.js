class FrameDouble {
  constructor() {
    this.firstRoll;
    this.secondRoll;
  }
}

describe('ScoreCard', () => {
  beforeEach(() => {
    scoreCard = new ScoreCard();

    boringFrame = new FrameDouble;
    boringFrame.firstRoll = 2;
    boringFrame.secondRoll = 8;

    spareFrame = new FrameDouble;
    spareFrame.firstRoll = 5;
    spareFrame.secondRoll = 5;

    strikeFrame = new FrameDouble;
    strikeFrame.firstRoll = 10;
  });

  it('can add a frame', () => {
    scoreCard.addFrame(boringFrame);

    expect(scoreCard.frames).toEqual([boringFrame]);
  });

  it('can add several frames', () => {
    scoreCard.addFrame(boringFrame);
    scoreCard.addFrame(spareFrame);
    scoreCard.addFrame(strikeFrame);

    expect(scoreCard.frames).toEqual([boringFrame, spareFrame, strikeFrame]);
  });
});