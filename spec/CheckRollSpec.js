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
  it("Raises an error if given invalid input",function(){
    expect(function(){checkRoll.run("d")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){checkRoll.run("15")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){checkRoll.run("hello")}).toThrow(
      new Error("invalid character")
    );
  });
});
