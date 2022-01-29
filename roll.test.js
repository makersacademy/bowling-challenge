const Roll = require('./roll');

describe('Roll class', () => {
  const roll = new Roll();
  it('roll pins adds the number of pins to frame score', () => {
    expect(roll.roll(4)).toBe(4);
  });

  it('returns bonus spare', () => {
    roll.roll(6)
    expect(roll.strikeOrSpare()).toBe('spare')
  });

  it('returns bonus strike', () => {
    roll.roll(10)
    expect(roll.strikeOrSpare()).toBe('strike')
  });

  it('returns bonus strike', () => {
    roll.roll(2)
    expect(roll.strikeOrSpare()).toBe('none')
  });

});