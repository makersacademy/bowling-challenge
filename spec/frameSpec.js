describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame;
  });

  it('should start with a roll index of 0', function() {
    expect(frame.rollIndex).toEqual(0);
  });

  it('should start with a firstRollScore 0', function() {
    expect(frame.firstRollScore).toEqual(0);
  });

  it('should start with a secondRollScore of 0', function() {
    expect(frame.secondRollScore).toEqual(0);
  });
})
