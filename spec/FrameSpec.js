describe('frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should start with 0 for roll 1', function() {
    expect(frame.roll_1()).toEqual(null);
  })
  it('should start with 0 for roll 2', function() {
    expect(frame.roll_2()).toEqual(null);
  })
  it('should start with 0 for bonus roll', function() {
    expect(frame.bonus_Roll()).toEqual(null);
  })
  it('should start with 0 for frame score', function() {
    expect(frame.frame_Score()).toEqual(null);
  })
});
