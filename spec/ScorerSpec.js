describe("Scorer", function() {
  var scorer;
  // var song;

  beforeEach(function() {
    scorer = new Scorer();
  });

  it("creates empty json to hold roll values", function() {
    expect(scorer.rolls.one.first).toEqual(null);
  });

  it("stores roll values", function() {
    scorer.score("one","first",5)
    expect(scorer.rolls.one.first).toEqual(5)
  })


});
