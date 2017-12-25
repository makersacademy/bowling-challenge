describe("Frame", function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("Should set and record rolls", function(){
    frame.setRoll(1, 5);
    expect(frame.getRoll(1)).toEqual(5);
  });

  it("Should return true when a strike", function(){
    frame.setRoll(1, 10);
    expect(frame.isStrike()).toBe(true);
  });

  it("Should return false when not a strike", function(){
    frame.setRoll(1, 2);
    expect(frame.isStrike()).toBe(false);
  });

  it("Should return true when a spare", function(){
    frame.setRoll(1,5);
    frame.setRoll(2,5);
    expect(frame.isSpare()).toBe(true);
  });

  it("Is not a spare when a strike occured", function(){
    frame.setRoll(1,10);
    expect(frame.isSpare()).toBe(false);
  });

  it("Is not a spare when 10 pins have not been knocked down", function(){
    frame.setRoll(1,2);
    frame.setRoll(2,3);
    expect(frame.isSpare()).toBe(false);
  });

  it("Returns the total score", function(){
    frame.setRoll(1,5);
    frame.setRoll(2,3);
    expect(frame.total()).toEqual(8);
  });

  it("Is not a final frame by default", function(){
    expect(frame.isFinalFrame()).toBe(false);
  });

  it("Is a final frame", function(){
    frame.setFinalFrame();
    expect(frame.isFinalFrame()).toBe(true);
  });
})
