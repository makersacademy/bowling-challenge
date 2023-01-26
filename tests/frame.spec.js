const Frame = require('../lib/frame');
const frame = new Frame(10, 3, 4);
const openFrame = new Frame(8, 1, 0);
const spareFrame = new Frame(5, 5, 0);

describe('Frame', () => {
  it('should record the rolls passed to it', () => {
    expect(frame.first).toEqual(10);
    expect(frame.second).toEqual(3);
  });
  it('should return the first roll', () => {
    expect(frame.getFirst()).toEqual(10);
  });

  it('should return the second roll', () => {
    expect(frame.getSecond()).toEqual(3);
  });

  it('should return the third roll', () => {
    expect(frame.getThird()).toEqual(4);
  });

  it('should return the total of all rolls', () => {
    expect(frame.getTotal()).toEqual(17);
    expect(openFrame.getTotal()).toEqual(9);
    expect(spareFrame.getTotal()).toEqual(10);
  });
  it('should return true for a strike', () => {
    expect(frame.isStrike()).toEqual(true);
  });

  it('should return false if not a strike', () => {
    expect(openFrame.isStrike()).toEqual(false);
  });

  it('should return true if a spare is thrown', () => {
    expect(spareFrame.isSpare()).toEqual(true);
  });

  it('should return false if spare is not thrown', () => {
    expect(frame.isSpare()).toEqual(false);
    expect(openFrame.isSpare()).toEqual(false);
  });
});
