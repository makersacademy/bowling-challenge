describe("Frame", function() {
  var frame

  beforeEach(function() {
  frame = new Frame;
  });

  it('initiliazes new frames with a score of 0', function() {
    expect(frame.frameScore).toEqual(0)
  });

  it('initiliazes new frames with 10 pins', function() {
    expect(frame.pinCount).toEqual(10)
  });

  it('bowls the first attempt reducing the pin count', function() {
    frame.roll1(6)
    expect(frame.pinCount).toEqual(4)
  })

  it('bowls the second attempt further reducing the pin count', function() {
    frame.roll1(3)
    frame.roll2(4)
    expect(frame.pinCount).toEqual(3)
  })

})
