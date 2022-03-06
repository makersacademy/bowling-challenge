const Frame = require("./frame");

describe('Frame', () => {
  it('plays 2 gutter balls', () => {
    frame = new Frame(0,0);
    expect(frame.score()).toEqual(0);
  })
  it('scores on each ball', () => {
    frame = new Frame(1,1);
    expect(frame.score()).toEqual(2);
  })
  it('scores a spare', () => {
    frame = new Frame(5,5);
    frame.score();
    expect(frame.spare).toBe(true);
  })
  it('scores a strike', () => {
    frame = new Frame(10,0);
    frame.score();
    expect(frame.strike).toBe(true);
  })
})