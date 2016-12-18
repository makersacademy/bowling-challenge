describe("Frame Manager", function() {

  var frameManager;

  beforeEach(function() {
    frameManager = new FrameManager();
  })

  it("Starts on the first frame", function() {
    expect(frameManager.currentFrame).toEqual(1)
  })

  it("Moves to the next frame", function() {
    frameManager.moveToNextFrame()
    expect(frameManager.currentFrame).toEqual(2)
  })

  it("Resets the frames back to one", function() {
    frameManager.moveToNextFrame()
    frameManager.moveToNextFrame()
    frameManager.resetFrame()
    expect(frameManager.currentFrame).toEqual(1)
  })

})
