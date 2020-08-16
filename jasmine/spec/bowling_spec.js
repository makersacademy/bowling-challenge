describe("Bowling Scorecard", function(){
  beforeEach(function() {
    bowling = new Bowling();
  });

  it("can score a single frame of bowling", function() {
    bowling.roll(3)
    bowling.roll(4)
    bowling.score()
    bowling.saveFrameTotal()
    bowling.tally()
    expect(bowling.total).toEqual(7)
  });

  it("contains a log of all rolls up to present", function() {
    bowling.roll(3)
    bowling.roll(4)
    bowling.roll(1)
    bowling.roll(3)
    bowling.score()
    bowling.saveFrameTotal()
    bowling.tally()
    expect(bowling.total).toEqual(11)
  });

  it("can recognise a strike and add the appropriate score", function() {
    bowling.roll(10)
    bowling.roll(3)
    bowling.roll(1)
    bowling.score()
    bowling.saveFrameTotal()
    bowling.evaluateStrike()
    bowling.tally()
    expect(bowling.total).toEqual(18)
  });

  it("can recognise a spare and add the appropriate score", function() {
    bowling.roll(4)
    bowling.roll(6)
    bowling.roll(3)
    bowling.roll(3)
    bowling.score()
    bowling.saveFrameTotal()
    bowling.evaluateSpare()
    bowling.tally()
    expect(bowling.total).toEqual(19)
  });

  it("can recognise a spare and a strike in the same game and add the appropriate score", function() {
    bowling.roll(4)
    bowling.roll(6)
    bowling.roll(3)
    bowling.roll(3)
    bowling.roll(10)
    bowling.roll(3)
    bowling.roll(1)
    bowling.score()
    bowling.saveFrameTotal()
    bowling.evaluateSpare()
    bowling.evaluateStrike()
    bowling.tally()
    expect(bowling.total).toEqual(37)
  });
});