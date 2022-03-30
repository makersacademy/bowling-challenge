const Frame = require('./frame')

describe('frame stores the rolls', () => {
  const frame = new Frame();

  it ('starts with an empty array', () => {
    expect(frame.getScore()).toBeEmpty;
  });

  it ('throws an error when trying to roll incorrect number of pins', () => {
    expect(() => { frame.rollPins(-1) }).toThrowError('cannot roll negative amount of pins');
    expect(() => { frame.rollPins(20) }).toThrowError('cannot roll more than a maximum amount of pins');
  });

  it ('adds the first roll to the frame', () => {
    frame.rollPins(4)
    expect(frame.getScore()).toBe(4);
  });

  it ('throws an error when trying to roll the 2nd time with more pins than possible', () => {
    expect(() => { frame.rollPins(8) }).toThrowError('the roll input exceeds the amount of pins left');
  });

  it ('adds the second roll to the frame and sums the total', () => {
    frame.rollPins(4)
    expect(frame.getScore()).toBe(8);
  });

  it ('throws an error when trying to roll more than twice', () => {
    expect(() => { frame.rollPins(4) }).toThrowError('cannot roll more than twice');
  });
});

describe('frame recognises a gutter game', () => {
  const frame = new Frame();

  it ('gives a pity message when 0 pins rolled', () => {
    frame.rollPins(0)
    expect(frame.getScore()).toBe('Unlucky!');
    frame.rollPins(0)
    expect(frame.getScore()).toBe('Unlucky!');
  });
});

describe('frame recognises a strike', () => {
  const frame = new Frame();

  it ('records a strike', () => {
    frame.rollPins(10)
    expect(frame.getScore()).toBe('Strike!');
  });
});

describe('frame recognises a strike', () => {
  const frame = new Frame();

  it ('records a strike', () => {
    frame.rollPins(4)
    frame.rollPins(6)
    expect(frame.getScore()).toBe('Spare!');
  });
});