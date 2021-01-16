describe('Frame', () => {

  beforeEach( function() {
    frame = new Frame();
  });

  it("is initialized with a score of zero", () => {
    expect(frame.score).toEqual(0);
  });

  it("is initialized with zero bonus rolls", () => {
    expect(frame.bonus_rolls).toEqual(0);
  });

});
