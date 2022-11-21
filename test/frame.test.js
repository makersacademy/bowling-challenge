const Frame = require('../lib/frame');

describe('Frame', () => {
  it('Check create new instant', () => {
    const frame = new Frame();
    expect(frame.getFrameResult()).toEqual([]);
  });

  it('Add score to frame result', () => {
    const frame = new Frame();
    frame.makeRoll(1);
    expect(frame.getFrameResult()).toEqual([1]);
    frame.makeRoll(5);
    expect(frame.getFrameResult()).toEqual([1, 5]);
  });

  it('Check frame bonus', () => {
    const frame = new Frame();
    expect(frame.getFrameBonus()).toEqual(0);
    frame.setFrameBonus(10);
    expect(frame.getFrameBonus()).toEqual(10);
  });

  it('Check frame result', () => {
    const frame = new Frame();
    frame.makeRoll(1);
    expect(frame.getFrameScore()).toEqual(1);
    frame.makeRoll(5);
    expect(frame.getFrameScore()).toEqual(6);
    frame.makeRoll(10);
    expect(frame.getFrameScore()).toEqual(16);
  });
});