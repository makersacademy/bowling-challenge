describe("CheckRoll",function(){
  var checkRoll
  var scorecard
  beforeEach(function(){
    scorecard = []
    checkRoll = new CheckRoll(scorecard);
  })
  it("throws game over error if rolling on a finished game",function(){
    checkRoll = new CheckRoll([[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4]])
    expect(function(){checkRoll.roll(5)}).toThrow(new Error("game is over"));
  })
  it("doesn't throws game over error on frame 10 turn 3 if theres a previous spare",function(){
    checkRoll = new CheckRoll([[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,6]])
    expect(function(){checkRoll.roll(5)}).not.toThrow(new Error("game is over"));
    expect(function(){checkRoll.roll(5)}).not.toThrow(new Error("frame score error"));

  })
  it("doesn't throws game over error/frame error on frame 10 turn 2 if theres a previous strike",function(){
    checkRoll = new CheckRoll([[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[10]])
    expect(function(){checkRoll.roll(5)}).not.toThrow(new Error("game is over"))
    expect(function(){checkRoll.roll(5)}).not.toThrow(new Error("frame score error"));
  })

  it("doesn't throws game over error/frame error on frame 10 turn 3 if theres a previous two strikes",function(){
    checkRoll = new CheckRoll([[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[10,10]])
    expect(function(){checkRoll.roll(5)}).not.toThrow(new Error("game is over"))
    expect(function(){checkRoll.roll(5)}).not.toThrow(new Error("frame score error"));
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

describe("CheckRoll.tenthFrameRoll",function(){
  it("can handle edge cases", function(){
    checkRoll = new CheckRoll([[10],[10],[10],[10],[10],[10],[10],[10],[10],[10,5]])
    expect(function(){checkRoll.tenthFrameRoll(10)}).toThrow(new Error("frame score error"))
    expect(function(){checkRoll.tenthFrameRoll(6)}).toThrow(new Error("frame score error"))
    expect(function(){checkRoll.tenthFrameRoll(5)}).not.toThrow(new Error("frame score error"))
  })
})
// limit = lastframe.length == 2 ? 10 : 10 - lastFrame()[0]

//valid roll : integer and r<10
