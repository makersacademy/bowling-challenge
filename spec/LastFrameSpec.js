'use strict';

describe("LastFrame", function(){

  var lastFrame;

  beforeEach(function() {
    lastFrame = new LastFrame();
  });

  it ("limits the second roll if the first wasn't a 10", function() {
    lastFrame.firstRoll(7);
    expect(function(){ lastFrame.secondRoll(4); }).toThrow(new Error("Can not knock down that many pins"));
  });

  it ("does not limit the second roll if the first was a 10", function() {
    lastFrame.firstRoll(10);
    lastFrame.secondRoll(10);
    lastFrame.frameScore()
    expect(lastFrame._frameScore).toEqual(20)
  });

  it("allows a third roll if the first roll of the frame was a 10", function() {
    lastFrame.firstRoll(10);
    lastFrame.secondRoll(0);
    lastFrame.thirdRoll(10);
    lastFrame.frameScore()
    expect(lastFrame._frameScore).toEqual(20)
  });

  it("allows a third roll if the sum of the first two rolls of the frame was 10", function() {
    lastFrame.firstRoll(5);
    lastFrame.secondRoll(5);
    lastFrame.thirdRoll(5);
    lastFrame.frameScore()
    expect(lastFrame._frameScore).toEqual(15)
  });

  it ("does not allow a third roll unless the first roll was a 10, or the sum of the first two rolls was 10", function() {
    lastFrame.firstRoll(3);
    lastFrame.secondRoll(3);
    expect(function(){ lastFrame.thirdRoll(4); }).toThrow(new Error("You can't make a third roll in this frame"));
  });

});
