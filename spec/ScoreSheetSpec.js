describe("ScoreSheet", function() {

  var scoresheet;

  beforeEach(function() {
    scoresheet = new ScoreSheet();
    frame = jasmine.createSpyObj("frame",["getRollKnockedPins"]);
    orderedFrame = jasmine.createSpyObj("orderedFrame", ["setFrame"]);
  });

  describe("#new", function() {
    it("creates a new scoresheet object", function() {
      expect(scoresheet).toEqual(jasmine.any(ScoreSheet));
    });
    it("includes a property count",function() {
      expect(scoresheet.getCount()).toEqual(1);
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
      scoresheet.addFrame(frame, orderedFrame);
      expect(scoresheet.getCount()).toEqual(2);
    });
    it("adds frame passed as argument to frames array", function() {
      scoresheet.addFrame(frame, orderedFrame);
      expect(scoresheet.getFrames()).toContain(orderedFrame);
    });
    it("throws error if count > 10", function() {
      for(i=0; i<11; i++) {
        scoresheet.incrementCount();
      };
      expect(function() {scoresheet.addFrame(frame)}).toThrow("This scoresheet already has 10 frames.");
    });
    it("throws error if sum of rolls > 10", function() {
      var frame3 = {
        getRollKnockedPins: function(number) {
          return number+5
        },
      };
      expect(function() {scoresheet.addFrame(frame3)}).toThrow("You cannot knock more than 10 pins per frame");
    });
  });
});
