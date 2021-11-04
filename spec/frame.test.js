var Frame = require("../docs/frame");

describe("Frame", function() {

  let frame = new Frame(1,2);
  let obj = {Number: 0, roll1: 1, roll2: 2, rollsTotal: 3, bonus: 0, frameTotal: 3 };
  
  let finalObject = {Number: 11, roll1: 10, roll2: 10, rollsTotal: 20 };

  it("returns the current frame object", function(){
    expect(frame.getFrame()).toEqual(obj);
  });


});

