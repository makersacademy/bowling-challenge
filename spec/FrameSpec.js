describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  it("should have an index", function() {
    expect(frame.index).toEqual(1);
  });

  describe("#displayScore", function() {
    beforeEach(function() {
      frame.firstRoll   = 5;
      frame.secondRoll  = 4;
    });

    it("should display blank if there are turns pending", function() {
      frame.turns = 1;
      expect(frame.displayScore()).toEqual("")
    });

    it("should display score if there are no turns pending", function() {
      frame.turns = 0;
      expect(frame.displayScore()).toEqual(9)
    });
  });

  describe("#firstRoll", function() {
    it("should return score of roll", function() {
      frame.firstRoll = 5;
      expect(frame.first).toEqual(5);
      expect(frame.hasStrike()).toEqual(false);
    });

    it("#hasStrike should return true if score of roll is 10", function() {
      frame.firstRoll = 10;
      expect(frame.hasStrike()).toEqual(true);
      expect(frame.turns).toEqual(2);
    });
  });

  describe("#secondRoll", function() {
    beforeEach(function() {
      frame.firstRoll = 3;
    });

    it("should return score of roll", function() {
      frame.secondRoll = 5;
      expect(frame.second).toEqual(5);
    });

    it("#score should return total score", function() {
      frame.secondRoll = 5;
      expect(frame.score()).toEqual(8);
      expect(frame.hasSpare()).toEqual(false);
    });

    it("#hasSpare should return true if total score is 10", function() {
      frame.secondRoll = 7;
      expect(frame.hasSpare()).toEqual(true);
      expect(frame.turns).toEqual(1);
    });
  });

  describe("lastFrame/#thirdRoll", function() {
    beforeEach(function() {
      lastFrame = new Frame(10);
    });

    describe("#hasSpare is true", function() {
      beforeEach(function() {
        lastFrame.firstRoll   = 5;
        lastFrame.secondRoll  = 5;
      });

      it("returns final score on thirdRoll", function() {
        lastFrame.thirdRoll =  8;
        expect(lastFrame.score()).toEqual(18);
        expect(lastFrame.turns).toEqual(0);
      });
    });

    describe("#hasSpare && #hasStrike is false", function() {
      beforeEach(function() {
        lastFrame.firstRoll   = 5;
        lastFrame.secondRoll  = 3;
      });

      it("returns final score on first two rolls only", function() {
        lastFrame.thirdRoll =  8;
        expect(lastFrame.score()).toEqual(8);
        expect(lastFrame.turns).toEqual(0);
      });
    });

    describe("#hasStrike is true", function() {
      beforeEach(function() {
        lastFrame.firstRoll = 10;
        lastFrame.secondRoll = 8;
      });

      it("returns final score on thirdroll", function() {
        lastFrame.thirdRoll =  8;
        expect(lastFrame.score()).toEqual(26);
        expect(lastFrame.turns).toEqual(0);
      });
    });
  });
});
