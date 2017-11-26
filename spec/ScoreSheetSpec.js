describe("ScoreSheet", function() {

  var scoresheet;

  beforeEach(function() {
    scoresheet = new ScoreSheet();
    frame = jasmine.createSpy("frame")
  });

  describe("#new", function() {
    it("creates a new scoresheet object", function() {
      expect(scoresheet).toEqual(jasmine.any(ScoreSheet));
    });
    it("includes a property count",function() {
      expect(scoresheet.getCount()).toEqual(0);
    });
    it("includes a property max frames",function() {
      expect(scoresheet.getMaxFrames()).toEqual(10);
    });
    it("includes a property frames which is an empty array",function() {
      expect(scoresheet.getFrames()).toEqual([]);
    });
  });

  describe ("#addFrame", function() {
    it("increments count property", function() {
      scoresheet.addFrame(frame);
      expect(scoresheet.getCount()).toEqual(1);
    });
    it("throws error if count > 10", function() {
      for(i=0; i<11; i++) {
        scoresheet.incrementCount();
      };
      expect(function() {scoresheet.addFrame()}).toThrow("This scoresheet already has 10 frames.");
    });
    it("adds frame passed as argument to frames array", function() {
      scoresheet.addFrame(frame);
      expect(scoresheet.getFrames()).toContain(frame)
    });
  });
});
