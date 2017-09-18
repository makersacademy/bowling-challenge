describe("Frame", function(){

  var frame;
  var spareFrame;
  var strikeFrame;

  beforeEach(function(){
    frame = new Frame(5, 2)
    spareFrame = new Frame(7,3);
    strikeFrame = new Frame(10,0);

  });

  it("receives the result of two rolls", function(){
    expect(frame.roll1 >= 0 && frame.roll1 <= 10).toBeTruthy();
    expect(frame.roll2 >= 0 && frame.roll2 <= 10).toBeTruthy();
  });

  it("expect total pins knocked down to be no more than 10", function(){
    expect(frame.roll1 + frame.roll2).toBeLessThan(11);
  });


  it("tallies a score that is below 10",function(){
    expect(frame.tally()).toEqual(7)
    expect(frame.scorePending).toBe(false)
    expect(frame.bonus).toEqual("none")
  });

  it("recognises when a spare has been rolled", function(){
    expect(spareFrame.tally()).toEqual(10)
    expect(spareFrame.scorePending).toBe(true)
    expect(spareFrame.bonus).toEqual("spare")
  });

  it("recognises when a strike has been rolled", function(){
    expect(strikeFrame.tally()).toEqual(10)
    expect(strikeFrame.scorePending).toBe(true)
    expect(strikeFrame.bonus).toEqual("strike")
  });

});
