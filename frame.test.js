const Frame = require('./frame');

describe('Frame', () => {
  beforeEach(() => {
    frame = new Frame([3,3]);
    strike_frame = new Frame([10]);
    spare_frame = new Frame([5,5]);
  });
  
  it('knows if strike', () => {
    expect(strike_frame._isStrike()).toBe(true);
  });

  it('knows if not strike', () => {
    expect(spare_frame._isStrike()).toBe(false);
  });

  it('calculates bonus if strike', () => {
    const next_frame = new Frame([0,8]);
    const next_next_frame = new Frame([2,0]);
    expect(strike_frame._bonus(next_frame, next_next_frame)).toBe(10);
  });

  it('calculates bonus if spare', () => {
    const next_frame = new Frame([0,8]);
    const next_next_frame = new Frame([2,0]);
    expect(spare_frame._bonus(next_frame, next_next_frame)).toBe(8);
  });
  
  it('sums the frame rolls', () => {
    expect(frame._sumFrame()).toBe(6);
  });
});