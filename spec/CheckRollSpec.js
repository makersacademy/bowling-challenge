describe("CheckRoll",function(){
  var scorecard;
  var checkRoll;
  beforeEach(function(){
    scorecard = [];
    checkRoll = new CheckRoll(scorecard)
  })
  it("Returns 0 for a valid roll",function(){
    expect(checkRoll.run("5")).toEqual(0)
  });
});
