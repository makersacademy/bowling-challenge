describe("bowlingScorer", function() {
  var scorer;
  var frame1;
  var frame2;
  var frame3;
  var frame4;
  var frame5;
  var frame6;
  var frame7;
  var frame8;
  var frame9;
  var frame10;
});

beforeEach(function() {
  scorer = new bowlingScorer();
  frame1 = jasmine.createSpy('frame1', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame2 = jasmine.createSpy('frame2', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame3 = jasmine.createSpy('frame3', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame4 = jasmine.createSpy('frame4', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame5 = jasmine.createSpy('frame5', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame6 = jasmine.createSpy('frame6', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame7 = jasmine.createSpy('frame7', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame8 = jasmine.createSpy('frame8', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame9 = jasmine.createSpy('frame9', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  frame10 = jasmine.createSpy('frame10', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
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
