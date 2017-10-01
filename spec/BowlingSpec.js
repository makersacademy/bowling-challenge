describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("should be able to hold the value for a the first bowl", function() {
        bowling.firstBowl(4);
        expect(bowling.firstBowlScore).toEqual(4);
  });

  it("should hold the value for a second bowl", function() {
        bowling.secondBowl(5);
        expect(bowling.secondBowlScore).toEqual(5);
  });

  it("should calculate the score for the turn based", function() {
        bowling.firstBowl(4);
        bowling.secondBowl(5);
        expect(bowling.turnTotalScore).toEqual(9);
  });
});
