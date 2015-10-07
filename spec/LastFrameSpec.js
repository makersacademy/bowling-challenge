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

  it("should not be able to receive a roll of more than ten", function() {
    expect(function(){lastFrame.receiveLastFrameRoll(11);}).toThrow("Must be a number between 0 and 10");
  });

  it("should not be able to receive two rolls adding up to more than ten", function() {
    lastFrame.receiveLastFrameRoll(3);
    expect(function(){lastFrame.receiveLastFrameRoll(8);}).toThrow("Too many pins");
  });

  it("should not be able to receive two rolls adding up to more than ten after a strike", function() {
    lastFrame.receiveLastFrameRoll(10);
    lastFrame.receiveLastFrameRoll(3);
    expect(function(){lastFrame.receiveLastFrameRoll(8);}).toThrow("Too many pins");
  });

  it("should not be able to receive a number lower than 0", function() {
    expect(function(){lastFrame.receiveLastFrameRoll(-1);}).toThrow("Must be a number between 0 and 10");
  });

  it("should not be able to receive anything other than a number", function() {
    expect(function(){lastFrame.receiveLastFrameRoll("a");}).toThrow("Must be a number between 0 and 10");
  });

});