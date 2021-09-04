class ScoreCardDouble {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    this.frames[this.frames.length - 1].setNumber(this.frames.length);
  }

  getFrameNumber(num) {
    return this.frames[num - 1];
  }
}

describe('Frame', () => {
  beforeEach(() => {
    scoreCard = new ScoreCardDouble;
    frame = new Frame(scoreCard);
  });

  it('has a scorecard', () => {
    expect(frame.scoreCard).toBe(scoreCard);
  });

  it('has a number', () => {
    frame2 = new Frame(scoreCard);

    expect(frame.number).toBe(1);
    expect(frame2.number).toBe(2);
  });

  it('starts with no rolls', () => {
    expect(frame.firstRoll).toBe(null)
    expect(frame.secondRoll).toBe(null)
  });

  it('allows adding a first roll', () => {
    frame.addRoll(1);

    expect(frame.firstRoll).toBe(1);
  });

  it('allows adding a second roll', () => {
    frame.addRoll(1);
    frame.addRoll(2);

    expect(frame.firstRoll).toBe(1);
    expect(frame.secondRoll).toBe(2);
  });

  it('can access the next frame', () => {
    frame2 = new Frame(scoreCard);

    expect(frame.after()).toBe(frame2);
  });
});