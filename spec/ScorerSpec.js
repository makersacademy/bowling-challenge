describe("Scorer", function() {
  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
  });

  it("creates empty json to hold roll values", function() {
    expect(scorer.rolls[1][1]).toEqual(null);
  });

  it("stores roll values", function() {
    scorer.storeScore(5,"1-1")
    expect(scorer.rolls[1][1]).toEqual(5)
  })

  it("calculates score from a spare", function() {
    scorer.storeScore(5,"1-1")
    scorer.storeScore(5,"1-2")
    scorer.storeScore(5,"2-1")
    scorer.spareCalculator()
    expect(scorer.rolls[1].bonus).toEqual(5)
  })


});
