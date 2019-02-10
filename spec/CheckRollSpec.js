describe("CheckRoll",function(){
  var checkRoll
  var scorecard
  beforeEach(function(){
    scorecard = []
    checkRoll = new CheckRoll(scorecard);
  })
  it("throws 'score error' if roll greater than 10",function(){
    expect(function(){checkRoll.roll(11)}).toThrow(new Error("score error"));
    expect(function(){checkRoll.roll(20)}).toThrow(new Error("score error"));
    expect(function(){checkRoll.roll(45)}).toThrow(new Error("score error"));
  })

  it("doesn't throw error for valid input",function(){
    expect(function(){checkRoll.roll(1)}).not.toThrow(new Error("score error"));
    expect(function(){checkRoll.roll(5)}).not.toThrow(new Error("score error"));
    expect(function(){checkRoll.roll(10)}).not.toThrow(new Error("score error"));
  })

  it("rasies an error if a frame exceeds 10",function(){
    checkRoll = new CheckRoll([[5]])
    expect(function(){checkRoll.roll(6)}).toThrow(new Error("frame score error"));
    checkRoll = new CheckRoll([[5,3],[10],[3]])
    expect(function(){checkRoll.roll(9)}).toThrow(new Error("frame score error"));
  });

  it("does't raise an error if frames are within 10", function(){
    checkRoll = new CheckRoll([[5]])
    expect(function(){checkRoll.roll(3)}).not.toThrow(new Error("frame score error"));
    checkRoll = new CheckRoll([[5,3],[10],[3]])
    expect(function(){checkRoll.roll(2)}).not.toThrow(new Error("frame score error"));
  })

});
// limit = lastframe.length == 2 ? 10 : 10 - lastFrame()[0]

//valid roll : integer and r<10
