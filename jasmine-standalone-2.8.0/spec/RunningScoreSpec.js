describe("RunningScore", function() {

  var score, frame, frame2, bowl1, bowl2, bowl3, bowl4, bowl5;

  beforeEach(function() {
    score = new RunningScore();
    frame = new Frame();
    frame2 = new Frame();
    bowl1 = new Bowl();
    bowl2 = new Bowl();
    bowl3 = new Bowl();
    bowl4 = new Bowl();
    bowl5 = new Bowl();
  })

  it("should start with no points", function() {
    expect(score.runningTotal).toEqual(0);
  })

  it("should show total score for non-special frame", function() {
    bowl1.roll(1);
    frame.addBowl(bowl1);
    bowl2.roll(3);
    frame.addBowl(bowl2);
    score.addFrame(frame);
    score.pinsHit(frame);
    expect(score.runningTotal).toEqual(4);
  })

  it("should show 'X' if a strike bowled", function() {
    bowl1.roll(10);
    frame.addBowl(bowl1);
    score.addFrame(frame);
    score.updateScoreDisplay(frame);
    expect(score.displayScore).toEqual("X");
  })

  it("should show '/' if a spare bowled", function() {
    bowl1.roll(6);
    frame.addBowl(bowl1);
    bowl2.roll(4);
    frame.addBowl(bowl2);
    score.addFrame(frame);
    score.pinsHit(frame);
    score.updateScoreDisplay(frame);
    expect(score.displayScore).toEqual("/");
  })

  it("should calc bonus if a spare is bowled", function() {
    bowl1.roll(5);
    frame.addBowl(bowl1);
    bowl2.roll(5);
    frame.addBowl(bowl2);
    score.addFrame(frame);
    score.pinsHit(frame);
    bowl3.roll(7);
    frame2.addBowl(bowl3);
    bowl4.roll(1);
    frame2.addBowl(bowl4);
    score.calcBonus(frame2);
    expect(score.frameBonus[0]).toEqual(7);
  })

})
