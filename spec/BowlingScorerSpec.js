describe("bowlingScorer", function() {
  var scorer;
});

beforeEach(function() {
  scorer = new bowlingScorer();
});

it("should start with a total score of zero", function() {
  expect(scorer.totalScore).toEqual(0)
});

describe("addFrame()", function() {
  it("should add the current frame to the frames array", function() {
    scorer.addFrame(frame1);
    expect(scorer.frames).toContain(frame1);
  });
});

describe("calculating bonuses", function() {
  it("should add the bonuses for a strike", function() {
    frame1.firstRoll(10);
    scorer.addFrame(frame1);
    expect(scorer.frames[0]._isStrike()).toEqual(true);
    frame2.firstRoll(5);
    frame2.secondRoll(4);
    scorer.addFrame(frame2);
    frame3.firstRoll(5);
    frame3.secondRoll(3);
    scorer.addFrame(frame3);
    expect(scorer.frames[0].frameBonus).toEqual(9);
  });
  it("should add the bonuses when the next frame is a strike", function() {
  for (var i = 1; i < 4; i++) {
    window["frame"+i].firstRoll(10);
    scorer.addFrame(window["frame" + i]);
  }
    expect(scorer.frames[0].frameBonus).toEqual(20);
  });
  it("should add the bonuses for a spare", function() {
    frame1.firstRoll(5);
    frame1.secondRoll(5);
    scorer.addFrame(frame1);
    expect(scorer.frames[0]._isSpare()).toEqual(true);
    frame2.firstRoll(4);
    frame2.secondRoll(3);
    scorer.addFrame(frame2);
    frame3.firstRoll(4);
    frame3.secondRoll(5);
    scorer.addFrame(frame3);
    expect(scorer.frames[0].frameBonus).toEqual(4);
  });
  it("should not add a bonus if no strike or spare was rolled", function() {
    frame1.firstRoll(5);
    frame1.secondRoll(3);
    scorer.addFrame(frame1);
    frame2.firstRoll(3);
    frame2.secondRoll(4);
    scorer.addFrame(frame2);
    expect(scorer.frames[0].frameBonus).toEqual(0);
  });
  it("should return 'gutter game' when the player scores 0 in every frame", function() {
    for (var i = 1; i < 10; i++) {
      window["frame"+i].firstRoll(0);
      window["frame"+i].secondRoll(0);
      scorer.addFrame(window["frame" + i]);
    }
    scorer._finalFrame(frame10);
    frame10.firstRoll(0);
    frame10.secondRoll(0);
    scorer.addFrame(frame10)
    expect(scorer.totalScore).toEqual(0);
    expect(scorer.result(scorer.totalScore)).toEqual("Gutter game!");
  });
  it("should calculate the scores for a perfect game", function() {
    for (var i = 1; i < 10; i++) {
      window["frame"+i].firstRoll(10);
      scorer.addFrame(window["frame" + i]);
    }
      scorer._finalFrame(frame10);
      frame10.firstRoll(10);
      frame10.secondRoll(10);
      frame10.bonusRoll(10);
      scorer.addFrame(frame10)
      expect(scorer.totalScore).toEqual(300);
      expect(scorer.result(scorer.totalScore)).toEqual("Perfect game!")
  });
});

describe("final frame", function() {
  beforeEach(function() {
    for (var i = 1; i < 10; i++) {
      window["frame"+i].firstRoll(0);
      window["frame"+i].secondRoll(0);
      scorer.addFrame(window["frame" + i]);
    }
      scorer._finalFrame(frame10);

  });
  it("should know if it is the final round", function() {
    expect(frame10._isTenthFrame).toEqual(true);
  });
  it("should calculate the final score after the tenth frame is added", function() {
    frame10.firstRoll(10);
    frame10.secondRoll(10);
    frame10.bonusRoll(10);
    scorer.addFrame(frame10);
    expect(scorer.totalScore).toEqual(30);
  })

});

describe("addScores()", function() {
  it("should add all scores together", function() {
    frame1.firstRoll(4);
    frame1.secondRoll(5);
    scorer.addFrame(frame1);
    frame2.firstRoll(4);
    frame2.secondRoll(6);
    scorer.addFrame(frame2);
    scorer._addScores(this.frames);
    expect(scorer.totalScore).toEqual(19);
  });
});

describe("Test Game", function() {
  it("should play a whole game", function() {
    frame1.firstRoll(1);
    frame1.secondRoll(4);
    scorer.addFrame(frame1);
    frame2.firstRoll(4);
    frame2.secondRoll(5);
    scorer.addFrame(frame2);
    frame3.firstRoll(6);
    frame3.secondRoll(4);
    scorer.addFrame(frame3);
    frame4.firstRoll(5);
    frame4.secondRoll(5);
    scorer.addFrame(frame4);
    frame5.firstRoll(10);
    scorer.addFrame(frame5);
    frame6.firstRoll(0);
    frame6.secondRoll(1);
    scorer.addFrame(frame6);
    frame7.firstRoll(7);
    frame7.secondRoll(3);
    scorer.addFrame(frame7);
    frame8.firstRoll(6);
    frame8.secondRoll(4);
    scorer.addFrame(frame8);
    frame9.firstRoll(10);
    scorer.addFrame(frame9);
    scorer._finalFrame(frame10);
    frame10.firstRoll(2);
    frame10.secondRoll(8);
    frame10.bonusRoll(6);
    scorer.addFrame(frame10);
    expect(scorer.result(scorer.totalScore)).toEqual("Your score is 133")
  });
});
