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
    expect(scorer.frames[0].frameBonus).toEqual(9);
  });
  it("should add the bonuses for a spare", function() {
    frame1.firstRoll(5);
    frame1.secondRoll(5);
    scorer.addFrame(frame1);
    expect(scorer.frames[0]._isSpare()).toEqual(true);
    frame2.firstRoll(4);
    frame2.secondRoll(3);
    scorer.addFrame(frame2);
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
  it("should calculate the base score for a perfect game", function() {
        frame1.firstRoll(10);
        scorer.addFrame(frame1);
        frame2.firstRoll(10);
        scorer.addFrame(frame2);
        frame3.firstRoll(10);
        scorer.addFrame(frame3);
        frame4.firstRoll(10);
        scorer.addFrame(frame4);
        frame5.firstRoll(10);
        scorer.addFrame(frame5);
        frame6.firstRoll(10);
        scorer.addFrame(frame6);
        frame7.firstRoll(10);
        scorer.addFrame(frame7);
        frame8.firstRoll(10);
        scorer.addFrame(frame8);
        frame9.firstRoll(10);
        scorer.addFrame(frame9);
        frame10.firstRoll(10);
        scorer.addFrame(frame10);
        scorer._addBase();
        expect(scorer.baseTotal).toEqual(100);
  });
});
  describe("addBase()", function() {
    it("should add all scores to the baseTotal", function() {
      frame1.firstRoll(4);
      frame1.secondRoll(5);
      scorer.addFrame(frame1);
      frame2.firstRoll(4);
      frame2.secondRoll(6);
      scorer.addFrame(frame2);
      scorer._addBase(this.frames);
      expect(scorer.baseTotal).toEqual(19);
    });
  });
