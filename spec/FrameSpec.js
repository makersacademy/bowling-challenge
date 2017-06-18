'use strict';

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("records the score of the first roll", function() {
    frame.firstRoll(6)
    expect(frame._scores).toEqual([6,0,0])
  });

  it("reads the score of the second roll", function(){
    frame.secondRoll(3)
    expect(frame._scores).toEqual([0,3,0])
  });

  it("limits the second roll to 10 - first roll", function(){
    frame.firstRoll(5)
    expect(function(){ frame.secondRoll(6); }).toThrow(new Error("Can not knock down more than 10 pins in a frame"));
  });

  it("records the score of the frame", function(){
    frame.firstRoll(5)
    frame.secondRoll(3)
    frame.frameScore()
    expect(frame._frameScore).toEqual(8)
  });

});
