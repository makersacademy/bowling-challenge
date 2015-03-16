describe("BowlingFrame", function() {

  var frame;

  beforeEach(function(){
    frame = new BowlingFrame();
  });


  it("can hold rolls", function() {
    frame.saveRoll(2)
    expect(frame.rolls).toEqual([2]);
  });


  it("can take a second roll", function() {
    frame.saveRoll(2)
    frame.saveRoll(3)
    expect(frame.rolls).toEqual([2,3])
  });

  it("knows when it's a spare", function() {
    frame.saveRoll(4)
    frame.saveRoll(6)
    expect(frame.spare).toBe(true)
  });

  it("know when it's a strike", function() {
    frame.saveRoll(10)
    expect(frame.strike).toBe(true)
  });

  



});
