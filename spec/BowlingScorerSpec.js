describe("bowlingScorer", function() {
  var scorer;
  var frame;
});

  beforeEach(function() {
    scorer = new bowlingScorer();
    frame = jasmine.createSpy('frame', ['rollOne', 'rollTwo'])
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
