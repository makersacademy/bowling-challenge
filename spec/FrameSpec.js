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

  it('can access the frame after next', () => {
    frame2 = new Frame(scoreCard);
    frame3 = new Frame(scoreCard);

    expect(frame.afterNext()).toBe(frame3);
  });

  it('calculates the base score', () => {
    expect(frame.baseScore()).toBe(0);

    frame.addRoll(2);
    expect(frame.baseScore()).toBe(2);

    frame.addRoll(3);
    expect(frame.baseScore()).toBe(5);
  });

  it("can tell if it's a bonus frame", () => {
    for (let i = 1; i < 12; i++) {
      frame = new Frame(scoreCard);
    }

    firstFrame = scoreCard.getFrameNumber(1);
    lastRegularFrame = scoreCard.getFrameNumber(10);
    bonusFrame = scoreCard.getFrameNumber(11);

    expect(firstFrame.isBonusFrame()).toBe(false);
    expect(lastRegularFrame.isBonusFrame()).toBe(false);
    expect(bonusFrame.isBonusFrame()).toBe(true);

    console.log(scoreCard)
  });

  it('can tell how many rolls it has', () => {
    frame.addRoll(1);
    expect(frame.hasTwoRolls()).toBe(false);
    
    frame.addRoll(2);
    expect(frame.hasTwoRolls()).toBe(true);
  });

  it('can tell if it is a boring frame', () => {
    frame.addRoll(5);
    frame.addRoll(4);

    expect(frame.isBoring()).toBe(true);
    expect(frame.isSpare()).toBe(false);
    expect(frame.isStrike()).toBe(false);    
  });

  it('can tell if it is a spare', () => {
    frame.addRoll(2);
    frame.addRoll(8);

    expect(frame.isBoring()).toBe(false);
    expect(frame.isSpare()).toBe(true);
    expect(frame.isStrike()).toBe(false);    
  });

  it('can tell if it is a strike', () => {
    frame.addRoll(10);

    expect(frame.isBoring()).toBe(false);
    expect(frame.isSpare()).toBe(false);
    expect(frame.isStrike()).toBe(true);    
  });
});
