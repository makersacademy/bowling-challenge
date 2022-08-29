const Score = require('./score');

describe('Score', () => {
  it('returns the result when player plays two frames', () => {
    const score = new Score();
    const mockFrame_1 = { getSum: () => 5, isSpare: () => false, isStrike: () => false }
    const mockFrame_2 = { getSum: () => 8, isSpare: () => false, isStrike: () => false }
    score.add(mockFrame_1);
    score.add(mockFrame_2);

    expect(score.forFrame(1)).toBe(5);
    expect(score.forFrame(2)).toBe(8);
  });

  it('returns the result when player plays two frames with the first one being a strike', () => {
    const score = new Score();
    const mockFrame_1 = { getSum: () => 10, isSpare: () => false, isStrike: () => true }
    const mockFrame_2 = { getSum: () => 8, isSpare: () => false, isStrike: () => false }
    score.add(mockFrame_1);
    score.add(mockFrame_2);

    expect(score.forFrame(1)).toBe(18);
  });

  it('returns the result when player plays three frames with the first two being a strike', () => {
    const score = new Score();
    const mockFrame_1 = { getSum: () => 10, isSpare: () => false, isStrike: () => true }
    const mockFrame_2 = { roll_1: 1, roll_2: 2, getSum: () => 3, isSpare: () => false, isStrike: () => false }
    score.add(mockFrame_1);
    score.add(mockFrame_1);
    score.add(mockFrame_2);

    expect(score.forFrame(1)).toBe(21);
  });

  it('returns the result when player plays two frames with the first two being a spare', () => {
    const score = new Score();
    const mockFrame_1 = { roll_1: 5, roll_2: 5, getSum: () => 10, isSpare: () => true, isStrike: () => false }
    const mockFrame_2 = { roll_1: 1, roll_2: 2, getSum: () => 3, isSpare: () => false, isStrike: () => false }
    score.add(mockFrame_1);
    score.add(mockFrame_2);

    expect(score.forFrame(1)).toBe(11);
  });
});