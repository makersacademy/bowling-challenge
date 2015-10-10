describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame;
  });

  it('should start with a roll index of 0', function() {
    expect(frame.rollIndex).toEqual(0);
  });

})
