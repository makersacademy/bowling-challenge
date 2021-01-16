describe('Frame', () => {

  it("is initialized with a score of zero", () => {
    frame = new Frame();
    expect(frame.score).toEqual(0);
  });

});
