const Frame = require('./frame');

describe('Frame', () => {
  it('gets the first roll', () => {
    const frame = new Frame(1);
    frame.getRollOne(5);
    expect(frame.rollOne).toEqual(5);
  })

  it('gets the second roll', () => {
    const frame = new Frame(1);
    frame.getRollTwo(4);
    expect(frame.rollTwo).toEqual(4);
  })
  
  it('returns the total of two rolls', () => {
    const frame = new Frame(1);
    frame.getRollOne(4);
    frame.getRollTwo(5);
    expect(frame.score()).toEqual(9);
  })

  it('marks strike when the first roll is equal to 10', () => {
    const frame = new Frame(1);
    frame.getRollOne(10);
    expect(frame.strike()).toEqual(true);
  })

  it('marks spare', () => {
    const frame = new Frame(1);
    frame.getRollOne(4);
    frame.getRollTwo(6);
    frame.score();
    expect(frame.spare()).toEqual(true);
  })
})