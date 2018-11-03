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

});
