const Frame = require('../lib/frame')

describe('Frame', () => {
  it('tests when isStrike is true', () => {
    const frame = new Frame(10, 0);
    expect(frame.isStrike()).toBeTruthy();
  });

  it('tests when isStrike is false', () => {
    const frame = new Frame(4, 3);
    expect(frame.isStrike()).toBeFalsy();
  });
  
  it('tests when isSpare is true', () => {
    const frame = new Frame(4, 6);
    expect(frame.isSpare()).toBeTruthy();
  });

  it('tests when isSpare is false', () => {
    const frame = new Frame(4, 3);
    expect(frame.isSpare()).toBeFalsy();
  });

  it('sets the bonus', () => {
    const frame = new Frame(7, 2);
    const newBonusValue = 5;
    expect(frame.bonus).toEqual(0);
    frame.setBonus(newBonusValue);
    expect(frame.bonus).toEqual(newBonusValue);
  });

  it('gets the bonus', () => {
    const frame = new Frame(7, 2);
    const newBonusValue = 5;
    expect(frame.getBonus()).toEqual(0);
    frame.bonus = newBonusValue;
    expect(frame.getBonus()).toEqual(newBonusValue);
  });

  it('returns the sum of a frame without any bonus', () => {
    const frame = new Frame(7, 2);
    expect(frame.sum()).toEqual(9);
  });

  it('returns the sum of a frame with bonus', () => {
    const frame = new Frame(7, 2);
    const newBonusValue = 5;
    frame.bonus = newBonusValue;
    expect(frame.sum()).toEqual(14);
  });
});
