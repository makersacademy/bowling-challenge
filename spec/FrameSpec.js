describe('Frame', () => {

  beforeEach(() => {
    frame = new Frame();
  });

  it('starts with no rolls', () => {
    expect(frame.firstRoll).toBe(null)
    expect(frame.secondRoll).toBe(null)
  });
});