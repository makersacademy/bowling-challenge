const Frame = require('../lib/frame')

describe('frame', () => {
  it('can handle a single roll', () => {
    const frame = new Frame();
    frame.addRoll(5);
    expect(frame.score()).toBe(5);
  });

  it('can handle two rolls', () => {
    const frame = new Frame();
    frame.addRoll(5);
    frame.addRoll(3);
    expect(frame.score()).toBe(8);
  });

  it('recognises two rolls equating to a spare', () => {
    const frame = new Frame();
    frame.addRoll(5);
    frame.addRoll(5);
    expect(frame.checkSpare()).toEqual(true);
  });

  it('recognises two rolls not equating to a spare', () => {
    const frame = new Frame();
    frame.addRoll(5);
    frame.addRoll(3);
    expect(frame.checkSpare()).toEqual(false);
  });

  it('recognises a strike', () => {
    const frame = new Frame();
    frame.addRoll(10);
    expect(frame.checkStrike()).toEqual(true);
  });  
})