describe("Scorecard", function() {
  var scorecard

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can record a single turn", function(){
    scorecard.record("5");
    scorecard.record("4");
    expect(scorecard.see()[0]).toEqual(["5","4"]);
    expect(scorecard.score()).toEqual([9]);
  });

  it("can record more than one turn", function(){
    scorecard.record("5");
    scorecard.record("4");
    scorecard.record("6");
    scorecard.record("2");
    expect(scorecard.see()).toEqual([["5","4"],["6","2"]]);
    expect(scorecard.score()).toEqual([9,17]);
  });

  it("can record a spare",function(){
    scorecard.record("5");
    scorecard.record("/");
    expect(scorecard.see()).toEqual([["5","/"]]);
  });

  it("can record a strike",function(){
    scorecard.record("5");
    scorecard.record("/");
    expect(scorecard.see()).toEqual([["5","/"]]);
  });

  it("throws an error if given invalid roll",function(){
    expect(function(){scorecard.record("a")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){scorecard.record("24")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){scorecard.record("10")}).toThrow(
      new Error("invalid character")
    );
  });



  //can calculate


});
