class FrameDouble {
  constructor() {
    this.firstRoll;
    this.secondRoll;
    this.number;
  }

  setNumber(num) {
    this.number = num;
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

  it('can find a frame by number', () => {
    scoreCard.addFrame(boringFrame);
    scoreCard.addFrame(spareFrame);
    scoreCard.addFrame(strikeFrame);

    expect(scoreCard.getFrameNumber(1).number).toEqual(1);
    expect(scoreCard.getFrameNumber(2).number).toEqual(2);
    expect(scoreCard.getFrameNumber(3).number).toEqual(3);
  });

  it('can return all the regular frames', () => {
    for (let i = 1; i < 12; i++) {
      frame = new FrameDouble;
      scoreCard.addFrame(frame);
    }

    console.log(scoreCard.regularFrames())

    expect(scoreCard.regularFrames().length).toBe(10);
  });
});