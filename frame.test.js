const Frame = require('./frame');

describe('Frame', () => {
  beforeEach(() => {
    frame = new Frame([3,3]);
    strike_frame = new Frame([10]);
    spare_frame = new Frame([5,5]);
    next_frame = new Frame([1,7]);
    next_next_frame = new Frame([2,3]);
    final_frame = new Frame([10, 8, 3])
  });
  
  it('calculates score of the 10th frame', () => {
    expect(final_frame.score(undefined, undefined)).toBe(21);
  });
  it('calculates score of the 9th frame', () => {
    expect(frame.score(next_frame, undefined)).toBe(6);
  });
  
  it('calculates score of a strike frame, including bonus', () => {
    expect(strike_frame.score(next_frame, next_next_frame)).toBe(18);
  });

  it('calculates score of a strike frame, when also followed by a strike, including bonus', () => {
    next_frame_strike = new Frame([10])
    
    expect(strike_frame.score(next_frame_strike, next_next_frame)).toBe(22);
  });

  it('calculates score of a spare frame, including bonus', () => {
    expect(spare_frame.score(next_frame, next_next_frame)).toBe(11);
  });

  it('knows if strike', () => {
    expect(strike_frame._isStrike()).toBe(true);
  });

  it('knows if not strike', () => {
    expect(spare_frame._isStrike()).toBe(false);
  });

  it('calculates bonus if strike', () => {
   
    expect(strike_frame._bonus(next_frame, next_next_frame)).toBe(8);
  });

  it('calculates bonus if spare', () => {
 
    expect(spare_frame._bonus(next_frame, next_next_frame)).toBe(1);
  });

});