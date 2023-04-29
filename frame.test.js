const Frame = require('./frame');

describe('Frame', () => {
  it('initliases with empty array this.rolls', () => {
    frame = new Frame();
    expect(frame.rolls).toEqual([]);
  })

  it('initliases with a bonus points value of 0', () => {
    frame = new Frame();
    expect(frame.bonus_points).toEqual(0);
  })
})