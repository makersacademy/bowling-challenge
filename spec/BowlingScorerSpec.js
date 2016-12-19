describe("bowlingScorer", function() {
  var scorer;
  var frame;
  var frame2;
});

  beforeEach(function() {
    scorer = new bowlingScorer();
    frame = jasmine.createSpy('frame', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
    frame2 = jasmine.createSpy('frame', ['rollOne', 'rollTwo', '_isStrike', 'frameBonus']);
  });

  it("should start with a total score of zero", function() {
    expect(scorer.totalScore).toEqual(0)
  });

  describe("addFrame()", function() {
    it("should add the current frame to the frames array", function() {
      scorer.addFrame(frame);
      expect(scorer.frames).toContain(frame);
    });
  });

  describe("calculating bonuses", function() {
    it("should add the bonuses for a strike", function() {
      frame.firstRoll(10);
      scorer.addFrame(frame);
      expect(scorer.frames[0]._isStrike()).toEqual(true);
      frame2.firstRoll(5);
      frame2.secondRoll(4);
      scorer.addFrame(frame2);
      scorer.calculateBonus(scorer.frames[0], scorer.frames[1])
      expect(scorer.frames[0].frameBonus).toEqual(9);
    });
  });
