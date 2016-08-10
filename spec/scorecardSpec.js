describe ("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it ("keeps the total score at any given time", function() {
    expect(scorecard.getScore()).toEqual(0);
  });

  it ("can receive the current throw's score", function() {
    scorecard.receiveScore(1);
    expect(scorecard.getScore()).toEqual(1);
  });

  it ("keeps a number of pins left in current frame", function() {
    expect(scorecard.getPinsLeft()).toEqual(10);
  });

  it ("keeps track of the roll number for current frame", function() {
    expect(scorecard.getCurrentRoll()).toEqual(1);
    scorecard.receiveScore(5);
    expect(scorecard.getCurrentRoll()).toEqual(2);
  });

  it ("keeps a list of frames", function() {
    expect(scorecard.getAllFrames()).toEqual(jasmine.any(Object));
  });

  it ("keeps the number of the current frame", function() {
    expect(scorecard.getCurrentFrameNumber()).toEqual(1);
  });

  describe ("Frame number", function() {
    it ("increases the frame number after a couple of plays", function() {
      scorecard.receiveScore(1);
      expect(scorecard.getCurrentFrameNumber()).toEqual(1);
      scorecard.receiveScore(1);
      expect(scorecard.getCurrentFrameNumber()).toEqual(2);
    });
    it ("jumps straight to the next frame number after a strike", function() {
      scorecard.receiveScore(10);
      expect(scorecard.getCurrentFrameNumber()).toEqual(2);
    });
    it ("unable to play after reaching Frame 11 (doesn't exist)", function() {
      scorecard._currentFrame = 10;
      scorecard._currentRoll = 3;
      scorecard.receiveScore(2);
      expect(scorecard.receiveScore(1)).toEqual(false);
    });
  });

  describe ("Keeping Score", function() {

    beforeEach(function() {
      scorecard.receiveScore(5);
    });
    it ("adds the points to the score", function() {
      expect(scorecard.getScore()).toEqual(5);
    });
    it ("records the score inside the frame object", function() {
      scorecard.receiveScore(3);
      expect(scorecard.getFrame(1)).toEqual({ 1: 5, 2: 3, totalScore: 8 });
    });

    describe("Bonus Points", function() {
      it ("correctly adds bonus points", function() {
        scorecard._hasBonusPoints = 1;
        scorecard.receiveScore(2);
        expect(scorecard.getScore()).toEqual(5 + 2 * 2);
      });
      it ("reduces the amount of bonus point rolls", function() {
        scorecard._hasBonusPoints = 2;
        scorecard.receiveScore(5);
        expect(scorecard._hasBonusPoints).toEqual(1);
      });
      it ("gives one spare bonus if player knocked all pins on second roll", function() {
        scorecard.receiveScore(5);
        expect(scorecard._hasBonusPoints).toEqual(1);
      });
      it ("gives two spare bonuses if player striked on first roll", function() {
        scorecard.receiveScore(5);
        scorecard.receiveScore(10);
        expect(scorecard._hasBonusPoints).toEqual(2);
      });
    });

  });

});
