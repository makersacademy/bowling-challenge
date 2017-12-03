describe("ScoreCard", function(){

  beforeEach(function(){
    scorecard = new ScoreCard()
  });

describe("record roll", function(){
  it("records the roll score in roll", function(){
    scorecard.recordRoll(5)
    expect(scorecard.total).toEqual(5)
  });
  it("records the roll score in frame", function(){
    scorecard.recordRoll(5)
    expect(scorecard.frame.points).toEqual(5)
  });
  xit("records the roll score in roll", function(){
    scorecard.recordRoll(5)
    expect(scorecard.frame.roll1.points).toEqual(5)
  });
});

describe("record second roll", function(){
  it("records the second roll and keeps first roll", function(){
    scorecard.recordRoll(5)
    scorecard.recordRoll(4)
    expect(scorecard.total).toEqual(9)
  });
  it("records the roll score in frame", function(){
    scorecard.recordRoll(5)
    scorecard.recordRoll(4)
    expect(scorecard.frame.points).toEqual(9)
  });
  xit("records the roll score in roll", function(){
    scorecard.recordRoll(5)
    scorecard.recordRoll(4)
    expect(scorecard.frame.roll2.points).toEqual(4)
  });
});

describe("spare bonus", function(){
  it("records first roll points in previous frame in spare bonus", function(){
    scorecard.recordRoll(5)
    scorecard.recordRoll(5)
    scorecard.recordRoll(4)
    scorecard.recordRoll(3)
    expect(scorecard.bonusFrame.points).toEqual(14)
  });
});

describe("strike bonus", function(){
  it("records all roll points in previous frame in strike bonus", function(){
    scorecard.recordRoll(10)
    scorecard.recordRoll(4)
    scorecard.recordRoll(2)
    expect(scorecard.bonusFrame.points).toEqual(16)
  });
});

describe("no bonus", function(){
  it("doesn't return a bonus score with no bonus mode", function(){
    scorecard.recordRoll(5)
    scorecard.recordRoll(3)
    scorecard.recordRoll(4)
    expect(scorecard.bonusFrame.points).toEqual(8)
  });
});

describe("cheat guard", function(){
  it("doesn't allow a frame score over 10", function(){
    scorecard.recordRoll(5)
    scorecard.recordRoll(6)
    expect(scorecard.frame.points).toEqual(5)
  });
});

describe("total", function(){
  it("total includes bonus points", function(){
    scorecard.recordRoll(5)
    scorecard.recordRoll(5)
    scorecard.recordRoll(5)
    expect(scorecard.total).toEqual(20)
  });
  it("total includes bonus points 2", function(){
    scorecard.recordRoll(5)
    scorecard.recordRoll(5)
    scorecard.recordRoll(5)
    scorecard.recordRoll(2)
    scorecard.recordRoll(5)
    expect(scorecard.total).toEqual(27)
  });
});

describe("final frame", function(){
  it("allows for only 3 rolls on final frame", function(){
    scorecard.count = 9
    scorecard.recordRoll(5)
    scorecard.recordRoll(5)
    scorecard.recordRoll(5)

  });
});

describe("perfect score", function(){
  it("returns 300 points for a perfect game", function(){
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    scorecard.recordRoll(10)
    console.log(scorecard.total)
    expect(scorecard.total).toEqual(300)
  });
});
describe("half perfect", function(){
  it("returns 190 points for weird game", function(){
    scorecard.recordRoll(10)
    scorecard.recordRoll(10)
    scorecard.recordRoll(10)
    scorecard.recordRoll(10)
    scorecard.recordRoll(10)
    scorecard.recordRoll(10)
    scorecard.recordRoll(10)
    scorecard.recordRoll(0)
    scorecard.recordRoll(0)
    scorecard.recordRoll(0)
    expect(scorecard.total).toEqual(190)
  });
});

});
