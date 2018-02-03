/* eslint-env jasmine */

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('has a score of 7 after one roll of seven', () => {
    frame.roll(7);
    expect(frame.score).toEqual(7);
  });
});
