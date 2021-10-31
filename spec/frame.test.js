var Frame = require("../docs/frame");

describe("Frame", function() {

  let frame = new Frame(1,2);

  it("returns frame array", function(){
    var next = new Frame([0,0]);
    expect(frame.getRolls()).toEqual([1,2]);
  });

  it("returns the total of two rolls in a frame", function(){
    var next = new Frame([0,0]);
    expect(frame.calcFrameTotal()).toEqual(3);
  });

});
