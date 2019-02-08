describe("Scorecard", function() {
  var scorecard

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can record a single turn", function(){
    scorecard.record("5");
    console.log(scorecard._scorecard);
    scorecard.record("4");
    console.log(scorecard._scorecard);
    expect(scorecard.see()[0]).toEqual(["5","4"]);
    expect(scorecard.score()[0]).toEqual([9]);
  });

});
