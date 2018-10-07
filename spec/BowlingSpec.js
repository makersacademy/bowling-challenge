describe("Bowling", function() {
  var bowling;
  var scorecard = jasmine.createSpyObj("scorecard",["addRoll"])


  beforeEach(function() {
    bowling = new Bowling(scorecard);

  });

  it("should be able to make a roll", function() {
    expect(typeof bowling.roll).toEqual("function");
  });

  it("should have a scorecard", function() {
    console.log(bowling)
    expect(bowling.scorecard).toBeDefined()
  })

  describe("roll", function() {
    it("should add bowl to scorecard", function() {
      bowling.roll(5)
      expect(scorecard.addRoll).toHaveBeenCalledWith(5)
    });
  });
});
