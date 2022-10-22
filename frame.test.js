const Frame = require('./frame')

describe('Frame class', () => {
  it('adds a roll', () => {
    const frame = new Frame;
    frame.roll(1);
    frame.roll(6);
    expect(frame.score()).toBe(7);
    expect(frame.done()).toBe(true);
    expect(frame.spare()).toBe(false);
  });
  it('scores a spare', () => {
    const frame = new Frame;
    frame.roll(7);
    frame.roll(3);
    expect(frame.score()).toBe(10);
    expect(frame.done()).toBe(true);
    expect(frame.spare()).toBe(true);
  });
  it('frame not done', () => {
    const frame = new Frame;
    frame.roll(7);
    expect(frame.score()).toBe(7);
    expect(frame.done()).toBe(false);
    expect(frame.spare()).toBe(false);
  });
  it('roll a strike', () => {
    const frame = new Frame;
    frame.roll(10);
    expect(frame.score()).toBe(10);
    expect(frame.done()).toBe(true);
    expect(frame.spare()).toBe(false);
    expect(frame.strike()).toBe(true);
  })
  it('no bonus 10th frame', () => {
    const frame = new Frame(true);
    frame.roll(1);
    frame.roll(6);
    expect(frame.score()).toBe(7);
    expect(frame.done()).toBe(true);
  });
  it('spare on 10th frame', () => {
    const frame = new Frame(true);
    frame.roll(4);
    frame.roll(6);
    expect(frame.spare()).toBe(true);
    expect(frame.done()).toBe(false);
    frame.roll(0);
    expect(frame.done()).toBe(true);
  });
  it('strike on 10th frame', () => {
    const frame = new Frame(true);
    frame.roll(10);
    expect(frame.strike()).toBe(true);
    expect(frame.done()).toBe(false);
    frame.roll(0);
    expect(frame.done()).toBe(false);
    frame.roll(10);
    expect(frame.done()).toBe(true);
  });
});
