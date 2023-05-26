const {Frame} = require('../lib/index');

let frame;

beforeEach(() => {
  frame = new Frame();
})

describe('Frame class', () => {
  it('constructs', () => {
    expect(frame).toBeTruthy();
    expect(frame).toHaveProperty('rolls', []);
  });

  describe('getRolls', () => {
    it('returns this.rolls', () => {
      expect(frame.getRolls()).toEqual([]);
    });
  });
});
