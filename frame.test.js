const Frame = require('./frame');
const Roll = require('./roll');

describe('Frame class', () => {
  const frame = new Frame();

  it ('updates frame total with pins amount if pins under 10', () => {
    frame.startRoll(8)
    expect(frame.frameTotal).toBe(8);
  });

  it ('updates frame Scores with pins amount if pins under 10', () => {
    expect(frame.frameScores).toEqual([ 8 ]);
  });

  it ('updates frame total with pins amount if pins under 10', () => {
    expect(frame.bonus).toBe('none');
  });

  it('throws an error if too many pins are added in second roll of the frame', () => {
    expect(() => { frame.startRoll(8); }).toThrow("Too many pins");
  });

  it('throws an error if too many pins are added in one roll', () => {
    const frame = new Frame();
    expect(() => { frame.startRoll(20); }).toThrow("Too many pins");
  });

});