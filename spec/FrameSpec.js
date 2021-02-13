describe('frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should start with 0 for roll 1', function() {
    expect(frame.roll_1()).toEqual(0);
  })
  it('should start with 0 for roll 2', function() {
    expect(frame.roll_2()).toEqual(0);
  })
  it('should start with 0 for bonus roll', function() {
    expect(frame.bonus_Roll()).toEqual(0);
  })
  it('should start with 0 for frame score', function() {
    expect(frame.frame_Score()).toEqual(0);
  })
  it('should start with 1 for frame number', function() {
    expect(frame.Number()).toEqual(1);
  })

  it('goes to the next frame', function() {
    frame.Next();
    expect(frame.Number()).toEqual(2);
  })
});
