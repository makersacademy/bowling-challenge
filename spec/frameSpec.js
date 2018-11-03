describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should default with an empty array', function() {
    expect(frame.score).toEqual([])
  });

  it('should add a roll to a frame', function() {
    frame.add(5)
    expect(frame.score).toEqual([5])
  })

  it('should push a 2nd roll of 0 if the first roll in the frame was 10', function() {
    frame.add(10)
    expect(frame.score).toEqual([10, 0])
  })

});
