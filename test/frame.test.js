import Frame from '../src/frame';

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame(3, 4);
  });

  it('creates a new instance of the class Frame', () => {
    expect(frame).toBeInstanceOf(Frame);
  });

  it('calculates the sum of the first and second roll', () => {
    expect(frame.frameTotalScore).toEqual(7);
  });
});
