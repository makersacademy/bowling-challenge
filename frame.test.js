const Frame = require('./frame');

describe(Frame, () => {

  let frame;

  beforeEach(() => {
    frame = new Frame;
  });

  describe('rollOne(score)', () => {
    it('raises an error if score is not an int from 0 to 10', () => {
      expect(frame.rollOne(11)).toThrowError('Please enter a number from 0 to 10');
    })
  });
});