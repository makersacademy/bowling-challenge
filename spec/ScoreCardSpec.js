describe("ScoreCard", function() {

  var scorecard;
  var diffFrameOne;
  var diffFrameTwo;

  beforeEach(function() {
    var frame = {
      score: 0
    }
    diffFrameOne = {
      score: 0,
      rollCount: 0,
      isClosed: false,
      isSprike: false,
      addScore: function (number) {
        this.rollCount++;
        this.score += number;
      }
    };
    diffFrameTwo = {
      score: 0,
      rollCount: 0,
      isClosed: false,
      isSprike: false,
      addScore: function(number) {
        this.rollCount++;
        this.score += number;
      }

    };

    var frames = [diffFrameOne,diffFrameTwo,frame,frame,frame,frame,frame,frame,frame,frame];
    scorecard = new ScoreCard(frames);
  });

  it("Begins with a score of 0", function() {
    expect(scorecard.getScore()).toEqual(0);
  });

  describe("Frames", function() {
    it("Is initialized with an array of 10 open frames.", function() {
      expect(scorecard.openFrames.length).toEqual(10);
    });

    it("Will add the score of a roll to the respective frame", function() {
      scorecard.roll(6);
      expect(diffFrameOne.score).toEqual(6);
    });

    it("Will add a closed normal frame to its score", function() {
      scorecard.roll(6);
      // Funny this must go here
      spyOn(diffFrameOne,"isClosed").and.returnValue(true);
      scorecard.roll(3);
      expect(diffFrameOne.score).toEqual(9);
      expect(scorecard.getScore()).toEqual(9);
    });

    it("Will add a third roll to the frame in the event of a spare", function() {
      scorecard.roll(6);
      scorecard.roll(4);
      expect(scorecard.getScore()).toEqual(0);
      spyOn(diffFrameOne,"isSprike").and.returnValue(true);
      spyOn(diffFrameOne,"isClosed").and.returnValue(true);
      scorecard.roll(6);
      expect(diffFrameOne.score).toEqual(16);
      expect(scorecard.getScore()).toEqual(16);
    });

    it("Will add a second and third roll in the event of a strike", function() {

      scorecard.roll(10);
      spyOn(diffFrameOne,"isSprike").and.returnValue(true);
      scorecard.roll(6);
      spyOn(diffFrameOne,"isClosed").and.returnValue(true);
      spyOn(diffFrameTwo,"isClosed")
      scorecard.roll(3);
      expect(diffFrameOne.score).toEqual(19);
      expect(diffFrameTwo.score).toEqual(9);
      expect(scorecard.getScore()).toEqual(28);


    });


  });


});
