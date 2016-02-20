describe("Score", function(){
  var score;

  beforeEach(function(){
    score = new Score();
  })

  it("saves the latest score", function(){
    score.changeLatestScore(4);
    expect(score.viewLatestScore()).toEqual(4);
  });

  it("saves the total score of the frame", function(){
    score.addResult(4, 0);
    score.addResult(6, 0);
    expect(score.viewTotal()).toEqual(10);
  });

  it("adds the latest score twice if count > 0", function(){
    score.setBonus(1);
    score.newFrame();
    score.addResult(3, 1);
    expect(score.viewTotal()).toEqual(6);
  })

  it("adds the bonus to the previous frame", function(){
    score.setBonus(1);
    score.newFrame();
    score.addResult(3, 1);
    expect(score.viewFrameScore(0)).toEqual(3);
  });
});