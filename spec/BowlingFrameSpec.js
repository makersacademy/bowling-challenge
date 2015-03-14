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



});
