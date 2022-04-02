import TenthFrame from '../src/tenthframe';

describe('TenthFrame', () => {
  let tenthFrame;

  beforeEach(() => {
    tenthFrame = new TenthFrame(10, 10, 4);
  });

  it('creates a new instance of the class TenthFrame', () => {
    expect(tenthFrame).toBeInstanceOf(TenthFrame);
  });

  it('calculates the sum of the first and second roll', () => {
    expect(tenthFrame.finalFrameScore).toEqual(24);
  });
});
