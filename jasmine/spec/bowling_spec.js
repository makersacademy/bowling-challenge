describe("Bowling Scorecard", function(){
  beforeEach(function() {
    bowling = new Bowling();
  });

  it("can score a single frame of bowling", function() {
    bowling.roll(3)
    bowling.roll(4)
    bowling.score()
    bowling.tally()
    expect(bowling.totalScore).toEqual(7)
  });

  it("contains a log of all rolls up to present", function() {
    bowling.roll(3)
    bowling.roll(4)
    bowling.roll(1)
    bowling.roll(3)
    bowling.score()
    bowling.tally()
    expect(bowling.totalScore).toEqual(11)
  });
});