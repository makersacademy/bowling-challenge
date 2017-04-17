describe("ScoreCard", function() {

  var scorecard;
  var diffFrameOne;
  var diffFrameTwo;
  var diffFrameThree;
  var diffFrameFour;
  var diffFrameTen;
  var frame;

  beforeEach(function() {
    frame = {
      score: 0,
      isClosed: false,
      addScore: function (number) {
        if (this.isClosed) {return};
        this.score += number;
      }
    }
    diffFrameOne = {
      score: 0,
      isClosed: false,
      isSprike: false,
      addScore: function (number) {
        this.score += number;
      }
    };
    diffFrameTwo = {
      score: 0,
      isClosed: false,
      isSprike: false,
      addScore: function(number) {
        this.score += number;
      }
    };
    diffFrameThree = {
      score: 0,
      isClosed: false,
      isSprike: false,
      addScore: function(number) {
        this.score += number;
      }
    };
    diffFrameFour = {
      score: 0,
      isClosed: false,
      addScore: function(number) {
        this.score += number;
      }
    };
    diffFrameTen = {
      score: 0,
      isClosed: false,
      isSprike: false,
      addScore: function(number) {
        this.score += number;
      }
    };


    var frames = [diffFrameOne,diffFrameTwo,diffFrameThree,diffFrameFour,frame,frame,frame,frame,frame,diffFrameTen];
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

    it("Can handle multiple strikes in a row", function() {
      scorecard.roll(10);
      spyOn(diffFrameOne, "isSprike").and.returnValue(true);
      scorecard.roll(10);
      spyOn(diffFrameTwo, "isSprike").and.returnValue(true);
      spyOn(diffFrameOne,"isClosed").and.returnValue(true);
      scorecard.roll(10);
      spyOn(diffFrameThree, "isSprike").and.returnValue(true);
      spyOn(diffFrameTwo,"isClosed").and.returnValue(true);
      scorecard.roll(6);
      spyOn(diffFrameThree,"isClosed").and.returnValue(true);
      spyOn(diffFrameFour,"isClosed").and.returnValue(true);
      scorecard.roll(3);
      expect(scorecard.getScore()).toEqual(84);
    });
  });

  describe("End Game", function() {


    it("Knows how to handle the Tenth Frame", function(){
      scorecard.roll(10);
      spyOn(diffFrameOne, "isSprike").and.returnValue(true);
      scorecard.roll(10);
      spyOn(diffFrameTwo, "isSprike").and.returnValue(true);
      spyOn(diffFrameOne,"isClosed").and.returnValue(true);
      scorecard.roll(10);
      spyOn(diffFrameThree, "isSprike").and.returnValue(true);
      spyOn(diffFrameTwo,"isClosed").and.returnValue(true);
      scorecard.roll(6);
      spyOn(diffFrameThree,"isClosed").and.returnValue(true);
      spyOn(diffFrameFour,"isClosed").and.returnValue(true);
      scorecard.roll(3);
      // These subsequent rolls are the double faking being frames
      // Five through Nine, with a value of 6 in each
      scorecard.roll(6);
      spyOn(frame,"isClosed").and.returnValue(true);
      scorecard.roll(0);
      scorecard.roll(0);
      scorecard.roll(0);
      scorecard.roll(3);
      scorecard.roll(7);
      spyOn(diffFrameTen,"isSprike").and.returnValue(true);
      spyOn(diffFrameTen,"isClosed").and.returnValue(true);
      scorecard.roll(6);
      expect(scorecard.getScore()).toEqual(130);
    });







  });


});
