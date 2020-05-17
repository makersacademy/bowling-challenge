describe("Frame", function() {
  var frames = [];

  beforeEach(function() {
    frames = [];
    for (var i = 0; i < 10; i++) {
      frames.push(new Frame(i));
    };

    for (var i = 0; i < 10; i++) {
      frame = frames[i];
      if (i == 0) {
        frame.nextFrame = frames[i + 1];
      } else if (i == 10) {
        frame.previousFrame = frames[i - 1];
      } else {
        frame.nextFrame = frames[i + 1];
        frame.prevFrame = frames[i - 1];
      };
    };
  });

  describe("#firstRoll", function() {
    beforeEach(function() {
      firstFrame = frames[0];
    });

    it("should return score of roll", function() {
      firstFrame.firstRoll = 5;
      expect(firstFrame.first).toEqual(5);
      expect(firstFrame.hasStrike()).toEqual(false);
    });

    it("#hasStrike should return true if score of roll is 10", function() {
      firstFrame.firstRoll = 10;
      expect(firstFrame.hasStrike()).toEqual(true);
    });

    it("#hasStrike - first and second frames should have correct score", function() {
      firstFrame.firstRoll = 10;

      secondFrame = frames[1];
      secondFrame.firstRoll = 5;
      secondFrame.secondRoll = 2;

      firstFrame.update();

      expect(firstFrame.score()).toEqual(17);
      expect(secondFrame.score()).toEqual(24);
    });
  });

  describe("#secondRoll", function() {
    beforeEach(function() {
      firstFrame = frames[0];
      firstFrame.firstRoll = 3;
    });

    it("should return score of roll", function() {
      firstFrame.secondRoll = 5;
      expect(firstFrame.second).toEqual(5);
    });

    it("#score should return total score", function() {
      firstFrame.secondRoll = 5;
      expect(firstFrame.score()).toEqual(8);
      expect(firstFrame.hasSpare()).toEqual(false);
    });

    it("#hasSpare should return true if total score is 10", function() {
      firstFrame.secondRoll = 7;
      expect(firstFrame.hasSpare()).toEqual(true);
    });
  });
});
