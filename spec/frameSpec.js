describe("Frame Manager", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it("Starts on the first frame", function() {
    expect(frame.currentFrame).toEqual(1)
  })

  it("Moves to the next frame", function() {
    frame.moveToNextFrame()
    expect(frame.currentFrame).toEqual(2)
  })

  it("Resets the frames back to one", function() {
    frame.moveToNextFrame()
    frame.moveToNextFrame()
    frame.resetFrame()
    expect(frame.currentFrame).toEqual(1)
  })

})
