describe("LastFrame", function() {
  var lastFrame

  beforeEach(function() {
    lastFrame = new LastFrame();
  });

  it("should throw an error if a third roll is entered without a strike or spare", function(){
    lastFrame.receiveLastFrameRoll(1);
    lastFrame.receiveLastFrameRoll(2);
    expect(function(){lastFrame.receiveLastFrameRoll(3);}).toThrow("Not allowed");
  });

  it("should calculate the correct total if there is a spare", function() {
    lastFrame.receiveLastFrameRoll(9);
    lastFrame.receiveLastFrameRoll(1);
    lastFrame.receiveLastFrameRoll(5);
    expect(lastFrame.totalScore).toEqual(15);
  });

  it("should calculate the correct total if there is a strike", function() {
    lastFrame.receiveLastFrameRoll(10);
    lastFrame.receiveLastFrameRoll(3);
    lastFrame.receiveLastFrameRoll(4);
    expect(lastFrame.totalScore).toEqual(17);
  });

});