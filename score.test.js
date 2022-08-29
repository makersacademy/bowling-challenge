const Score = require('./score');

describe('Score', () => {
  it('returns the result when player plays two frames', () => {
    const score = new Score();
    const mockFrame_1 = { getSum: () => 5, isSpare: () => false, isStrike: () => false };
    const mockFrame_2 = { getSum: () => 8, isSpare: () => false, isStrike: () => false };
    score.add(mockFrame_1);
    score.add(mockFrame_2);

    expect(score.forFrame(1)).toBe(5);
    expect(score.forFrame(2)).toBe(8);
  });

  it('returns the result when player plays two frames with the first one being a strike', () => {
    const score = new Score();
    const mockFrame_1 = { getSum: () => 10, isSpare: () => false, isStrike: () => true };
    const mockFrame_2 = { getSum: () => 8, isSpare: () => false, isStrike: () => false };
    score.add(mockFrame_1);
    score.add(mockFrame_2);

    expect(score.forFrame(1)).toBe(18);
  });

  it('returns the result when player plays three frames with the first two being a strike', () => {
    const score = new Score();
    const mockFrame_1 = { getSum: () => 10, isSpare: () => false, isStrike: () => true };
    const mockFrame_2 = { roll_1: 1, roll_2: 2, getSum: () => 3, isSpare: () => false, isStrike: () => false };
    score.add(mockFrame_1);
    score.add(mockFrame_1);
    score.add(mockFrame_2);

    expect(score.forFrame(1)).toBe(21);
  });

  it('returns the result when player plays two frames with the first one being a spare', () => {
    const score = new Score();
    const mockFrame_1 = { roll_1: 5, roll_2: 5, getSum: () => 10, isSpare: () => true, isStrike: () => false };
    const mockFrame_2 = { roll_1: 1, roll_2: 2, getSum: () => 3, isSpare: () => false, isStrike: () => false };
    score.add(mockFrame_1);
    score.add(mockFrame_2);

    expect(score.forFrame(1)).toBe(11);
  });

  it('returns the result when player plays a gutter game', () => {
    const score = new Score();
    const mockFrame = { getSum: () => 0, isSpare: () => false, isStrike: () => false };
    for (let i = 1; i <= 10; i++) {
      score.add(mockFrame);
    };

    expect(score.total()).toBe(0);
  });

  it('returns the result when player plays the perfect game', () => {
    const score = new Score();
    const mockFrame = { roll_1: 10, getSum: () => 10, isSpare: () => false, isStrike: () => true };
    for (let i = 1; i <= 12; i++) {
      score.add(mockFrame);
    };

    expect(score.total()).toBe(300);
  });

  it('returns the result when player plays a game', () => {
    const score = new Score();
    const mockFrame_1 = { roll_1: 1, roll_2: 4, getSum: () => 5, isSpare: () => false, isStrike: () => false };
    const mockFrame_2 = { roll_1: 4, roll_2: 5, getSum: () => 9, isSpare: () => false, isStrike: () => false };
    const mockFrame_3 = { roll_1: 6, roll_2: 4, getSum: () => 10, isSpare: () => true, isStrike: () => false };
    const mockFrame_4 = { roll_1: 5, roll_2: 5, getSum: () => 10, isSpare: () => true, isStrike: () => false };
    const mockFrame_5 = { roll_1: 10, roll_2: 0, getSum: () => 10, isSpare: () => false, isStrike: () => true };
    const mockFrame_6 = { roll_1: 0, roll_2: 1, getSum: () => 1, isSpare: () => false, isStrike: () => false };
    const mockFrame_7 = { roll_1: 7, roll_2: 3, getSum: () => 10, isSpare: () => true, isStrike: () => false };
    const mockFrame_8 = { roll_1: 6, roll_2: 4, getSum: () => 10, isSpare: () => true, isStrike: () => false };
    const mockFrame_9 = { roll_1: 10, roll_2: 0, getSum: () => 10, isSpare: () => false, isStrike: () => true };
    const mockFrame_10 = { roll_1: 2, roll_2: 8, getSum: () => 10, isSpare: () => true, isStrike: () => false };
    score.add(mockFrame_1);
    score.add(mockFrame_2);
    score.add(mockFrame_3);
    score.add(mockFrame_4);
    score.add(mockFrame_5);
    score.add(mockFrame_6);
    score.add(mockFrame_7);
    score.add(mockFrame_8);
    score.add(mockFrame_9);
    score.add(mockFrame_10);

    // Extra roll due to spare in last frame
    const mockFrame_11 = { roll_1: 6, roll_2: 0, getSum: () => 6, isSpare: () => false, isStrike: () => false };
    score.add(mockFrame_11);

    expect(score.total()).toBe(133);
  });
});