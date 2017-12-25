describe("Frame", function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("Should set and record rolls", function(){
    frame.setRoll(1, 5);
    expect(frame.getRoll(1)).toEqual(5);
  })

  it("Should return true when a strike", function(){
    frame.setRoll(1, 10);
    expect(frame.isStrike()).toBe(true);
  })

  it("Should return true when a spare", function(){
    frame.setRoll(1,5);
    frame.setRoll(2,5);
    expect(frame.isSpare()).toBe(true);
  })
})
