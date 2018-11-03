describe("Frame", function() {
  var frame;
  var roll;

  beforeEach(function() {
    frame = new Frame();
    roll = new Roll();
  });

  it('should default with an empty array', function() {
    expect(frame.score).toEqual([])
  });

  it('should add a roll to a frame', function() {
    roll.pins(5)
    frame.add(roll.score)
    expect(frame.score).toEqual([roll.score])
  })

});
