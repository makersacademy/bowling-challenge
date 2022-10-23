const Frame = require('./frame');

describe('Frame', () => {
  it('returns the total of two rolls', () => {
    const frame = new Frame(4,5);
    expect(frame.getSum()).toBe(9);
  })

  it('marks strike', () => {
    const frame = new Frame(10,0);
    expect(frame.strike()).toBe(true);
  })

  it('returns false if the roll one is not equal to 10', () => {
    const frame = new Frame(0,10);
    expect(frame.strike()).toBe(false);
  })

  it('marks spare', () => {
    const frame = new Frame(5,5);
    expect(frame.spare()).toBe(true);
  })

  it('returns false if it is a strike hit', () => {
    const frame = new Frame(10,0);
    expect(frame.spare()).toBe(false);
  })
})