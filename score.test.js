const Score = require('./score');

describe('Score', () => {
  it('returns an array of frames', () => {
    const score = new Score();
    score.add([2,5]);
    result = score.add([6,3]);
    expect(result).toEqual([[2,5], [6,3]]);
  });
});