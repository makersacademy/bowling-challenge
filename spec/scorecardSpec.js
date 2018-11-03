describe("Scorecard", function() {

  beforeEach(function() {
    sc = new Scorecard();
  });

  it("should be able to enter score", function() {
    sc.enterScore(5);
    expect(sc.scores[0]).toEqual(5);
  });

  it("should be able to keep track of totals", function() {
    sc.enterScore(5);
    sc.enterScore(4);
    expect(sc.total).toEqual(9);
  });

});
