class ScoreCardDouble {
  constructor() {
    this.frames = []
  }

  addFrame(frame) {
    this.frames.push(frame)
  }
}

describe('Frame', () => {
  beforeEach(() => {
    scoreCard = new ScoreCardDouble;
    frame = new Frame(scoreCard);
  });

  it('has a scorecard', () => {
    expect(frame.scoreCard).toBe(scoreCard)
  })

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
});