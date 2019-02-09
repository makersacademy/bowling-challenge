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
  it("Raises an error if roll makes frame total larger than 9",function(){
    checkRoll._scorecard = [["6"]];
    expect(function(){checkRoll.run("6")}).toThrow(
      new Error("illegal score")
    );
    checkRoll._scorecard = [["6","/"],["4"]]
    expect(function(){checkRoll.run("8")}).toThrow(
      new Error("illegal score")
    );
  })
  it("Raises an error for illegal spares",function(){
    expect(function(){checkRoll.run("/")}).toThrow(
      new Error("illegal spare")
    );
    checkRoll._scorecard = [["5","4"],["3","5"]]
    expect(function(){checkRoll.run("/")}).toThrow(
      new Error("illegal spare")
    );
  })
  it("Doesn't raise error for legal spares", function(){
    checkRoll._scorecard =[["1"]]
    expect(function(){checkRoll.run("/")}).not.toThrow(
      new Error("illegal spare")
    );
    checkRoll._scorecard =[["1","3"],["5"]]
    expect(function(){checkRoll.run("/")}).not.toThrow(
      new Error("illegal spare")
    );
  });
    it("raises an error for illegal strikes",function(){
      checkRoll._scorecard = [["1"]]
      expect(function(){checkRoll.run("X")}).toThrow(
        new Error("illegal strike")
      );
      checkRoll._scorecard = [["1","3"],["4"]]
      expect(function(){checkRoll.run("X")}).toThrow(
        new Error("illegal strike")
      );
    });
    it("doesn't raise error for legal strikes",function(){
      checkRoll._scorecard = []
      expect(function(){checkRoll.run("X")}).not.toThrow(
        new Error("illegal strike")
      );
      checkRoll._scorecard = [["1","2"],["3","5"]];
      expect(function(){checkRoll.run("X")}).not.toThrow(
        new Error("illegal strike")
      );
    });
    //raise error for exceeding 9
});
