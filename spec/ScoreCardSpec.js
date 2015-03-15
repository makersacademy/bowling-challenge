describe("ScoreCard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe("initialization settings", function(){

    it("should have a score of zero", function() {
      expect(scorecard.score).toEqual(0);
    });

    it("should know the current frame is 1", function(){
      expect(scorecard.currentFrame).toEqual(1);
    });

    it("should know the current roll will be 1", function(){
      expect(scorecard.currentBowl).toEqual(1);
    });

    it("should know that the game is not over", function(){
      expect(scorecard.isGameOver).toEqual(false);
    });

  });

  describe("playing the game settings", function(){

    it("should be able to calculate the frame score", function(){
      scorecard.hitPins(5);
      scorecard.hitPins(3);
      scorecard.tallyFrameScore();
      expect(scorecard.frames[1].score).toEqual(8);
    });

    it("should be able to change the current bowl", function(){
      scorecard.hitPins(5);
      expect(scorecard.currentBowl).toEqual(2);
    });

    it("should be able to reset the current bowl to 1 at the start of each new frame", function(){
      scorecard.hitPins(2);
      scorecard.hitPins(3);
      expect(scorecard.currentBowl).toEqual(1);
    });

    it("should be able to change the frame", function(){
      scorecard.hitPins(2);
      scorecard.hitPins(3);
      expect(scorecard.currentFrame).toEqual(2);
    });

    it("should know that the game is over", function(){
      scorecard.currentFrame = 10;
      scorecard.changeFrame()
      expect(scorecard.isGameOver).toEqual(true);
    });

  });

  describe("strike and spare scoring", function(){

    it("should know when there is a strike", function(){
      scorecard.hitPins(10);
      expect(scorecard.frames[1].strike).toEqual(true);
    });
  
    it("should know when there is a spare", function(){
      scorecard.hitPins(5);
      scorecard.hitPins(5);
      expect(scorecard.frames[1].spare).toEqual(true);
    });

    it("should properly adjust the score in a frame where a spare occured", function(){
      scorecard.hitPins(5);
      scorecard.hitPins(5);
      scorecard.hitPins(5);
      scorecard.tallyFrameScore();
      expect(scorecard.frames[1].score).toEqual(15);
    });

    it("should properly adjust the score in a frame where a strike occured", function(){
      scorecard.hitPins(10);
      scorecard.hitPins(5);
      scorecard.hitPins(5);
      scorecard.tallyFrameScore();
      expect(scorecard.frames[1].score).toEqual(20);
    });

    it("should total up the game's score", function(){
      scorecard.hitPins(10);
      scorecard.hitPins(10);
      scorecard.tallyFrameScore();
      expect(scorecard.tallyTotalScore()).toEqual(30);
    });

  });

});