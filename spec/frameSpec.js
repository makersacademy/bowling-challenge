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

  it("Throws an error when maximum number of frames are reached", function() {
    for(count = 0; count < 10; count++) {
      frameManager.moveToNextFrame();
    }
    expect(function() {frameManager.moveToNextFrame()}).toThrow(new Error("Maximum number of frames reached!"))
  })

})
