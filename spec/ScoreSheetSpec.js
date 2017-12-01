describe("ScoreSheet", function() {

  var scoresheet;

  beforeEach(function() {
    scoresheet = new ScoreSheet();
    frame = jasmine.createSpyObj("frame",["getRollKnockedPins"]);
  });

  describe("#new", function() {
    it("creates a new scoresheet object", function() {
      expect(scoresheet).toEqual(jasmine.any(ScoreSheet));
    });
    it("includes a property count",function() {
      expect(scoresheet.getCount()).toEqual(0);
    });
    it("includes a property max frames",function() {
      expect(scoresheet.getMaxFrames()).toEqual(11);
    });
    it("includes a property scorable frame index",function() {
      expect(scoresheet.getMaxScorableFrames()).toEqual(10);
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
    it("adds frame passed as argument to frames array", function() {
      scoresheet.addFrame(frame);
      expect(scoresheet.getFrames()).toContain(frame);
    });
    it("throws error if count > 10", function() {
      for(i=0; i<=11; i++) {
        scoresheet.incrementCount();
      };
      expect(function() {scoresheet.addFrame(frame)}).toThrow("This scoresheet already has 12 frames.");
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

  describe ("countScorableFrames", function() {
    it("returns the number of frames in the scoresheet if less than 10", function() {
      for(i=0; i<6; i++) {
        scoresheet.incrementCount();
      };
      expect(scoresheet.countScorableFrames()).toEqual(6)
    });
    it("returns the number of frames in the scoresheet if less than 10", function() {
      for(i=0; i<=11; i++) {
        scoresheet.incrementCount();
      };
      expect(scoresheet.countScorableFrames()).toEqual(10)
    });
  });

  describe ("getFrame", function() {
    it("returns the frame at the index passed at argument", function() {
      scoresheet.addFrame(frame)
      expect(scoresheet.getFrame(0)).toEqual(frame)
    });
  });

  describe ("calculateBaseScore", function() {
    it("returns the sum of all knocked pins", function() {
      var frame2 = {
        scoreFrame: function() {
          return 1
        },
        getRollKnockedPins: function(number) {
          return 0
        }
      };
      for(i=0; i<12; i++) {
        scoresheet.addFrame(frame2)
      };
      expect(scoresheet.calculateBaseScore()).toEqual(10)
    });
  });

  describe ("calculateBonus", function() {
    it("adds the knocked pins from the next roll to the bonus when spare", function() {
      var frame2 = new Frame(new Roll(4), new Roll(6))
      var frame3 = new Frame(new Roll(9), new Roll(0))
      scoresheet.addFrame(frame2)
      scoresheet.addFrame(frame3)
      expect(scoresheet.calculateBonus()).toEqual(9)
    });
    it("adds the knocked pins from the next rolls to the bonus when 2 spares", function() {
      var frame2 = new Frame(new Roll(4), new Roll(6))
      var frame3 = new Frame(new Roll(9), new Roll(1))
      var frame4 = new Frame(new Roll(2), new Roll(1))
      scoresheet.addFrame(frame2)
      scoresheet.addFrame(frame3)
      scoresheet.addFrame(frame4)
      expect(scoresheet.calculateBonus()).toEqual(11)
    });
    it("doesn't add to the bonus until next frame is added", function() {
      var frame2 = new Frame(new Roll(4), new Roll(6))
      scoresheet.addFrame(frame2)
      expect(scoresheet.calculateBonus()).toEqual(0)
    });
    it("adds the knocked pins from the next 2 rolls to the bonus when strike", function() {
      var frame2 = new Frame(new Roll(10), new Roll(0))
      var frame3 = new Frame(new Roll(4), new Roll(3))
      scoresheet.addFrame(frame2)
      scoresheet.addFrame(frame3)
      expect(scoresheet.calculateBonus()).toEqual(7)
    });
    it("adds the knocked pins from the next 2 rolls to the bonus when 2 strikes", function() {
      var frame2 = new Frame(new Roll(10), new Roll(0))
      var frame3 = new Frame(new Roll(10), new Roll(0))
      var frame4 = new Frame(new Roll(4), new Roll(3))
      scoresheet.addFrame(frame2)
      scoresheet.addFrame(frame3)
      scoresheet.addFrame(frame4)
      expect(scoresheet.calculateBonus()).toEqual(21)
    });
    it("correctly calculates the bonus of a perfect game", function() {
      var frame2 = new Frame(new Roll(10), new Roll(0))
      for(i=0; i<12; i++) {
        scoresheet.addFrame(frame2)
      };
      expect(scoresheet.calculateBonus()).toEqual(200)
    });
  });
  describe ("calculateScore", function() {
    it("correctly calculates the score of a perfect game", function() {
      var frame2 = new Frame(new Roll(10), new Roll(0))
      for(i=0; i<12; i++) {
        scoresheet.addFrame(frame2)
      };
      expect(scoresheet.calculateScore()).toEqual(300)
    });
    it("correctly calculates the score of a zero game", function() {
      var frame2 = new Frame(new Roll(0), new Roll(0))
      for(i=0; i<12; i++) {
        scoresheet.addFrame(frame2)
      };
      expect(scoresheet.calculateScore()).toEqual(0)
    });
  });
});
