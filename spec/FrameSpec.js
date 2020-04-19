describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('returns true for isStrike if player strikes', function() {
    frame.setValues(10);
    expect(frame.isStrike()).toEqual(true);
  });
});
