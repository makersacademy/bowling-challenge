describe("Scorer", function() {
  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
  });

  it("creates empty json to hold roll values", function() {
    expect(scorer.rolls[1]).toEqual(null);
  });

  it("creates empty json to hold bonus values", function() {
    expect(scorer.bonus[1]).toEqual(null);
  });

  it("creates empty json to hold notes values", function() {
    expect(scorer.notes[1]).toEqual(null);
  });

  it("stores roll values", function() {
    scorer.storeScore(5,1)
    expect(scorer.rolls[1]).toEqual(5)
  });

  it("calculates score from a spare", function() {
    scorer.storeScore(5,1)
    scorer.storeScore(5,2)
    scorer.storeScore(5,3)
    scorer.spareCalculator()
    expect(scorer.bonus[1]).toEqual(5)
  });

  it("calcualtes score from a strike within sequential frames", function() {
    scorer.storeScore(10,1)
    scorer.storeScore(0,2)
    scorer.storeScore(5,3)
    scorer.storeScore(2,4)
    scorer.spareCalculator()
    expect(scorer.bonus[1]).toEqual(7)
  });




});
