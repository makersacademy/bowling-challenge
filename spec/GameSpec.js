describe("Game", function(){
  var game;
  beforeEach(function(){
    game = new Game()
    });

  it("initializes with all frames as empty", function() {
    expect(game.allFrames).toEqual([]);
  });

  it("initializes with a score of 0", function() {
    expect(game.runningTotal).toEqual(0);
  });

  it("initializes with an empty current frame", function() {
    expect(game.currentFrame.frameScores).toEqual([]);
  });

  describe("play", function(){

    it("bowls a ball on the frame", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      game.play();
      expect(game.currentFrame.frameScores).toEqual([5]);
    });

    it("pushes the frame score to allFrames on completion", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      game.play();
      game.play();
      expect(game.allFrames[0].frameScores).toEqual([5, 5]);
    });
  });

  describe("_frameReset", function() {

    it("resets the frame on completion", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      game.play();
      game.play();
      expect(game.currentFrame.frameScores).toEqual([]);
    });
  });

  describe("_scoreCalculator", function() {

    it("adds the score of the frame on completion", function() {
      spyOn(Math, 'floor').and.returnValue(3);
      game.play();
      game.play();
      expect(game.runningTotal).toEqual(6);
    });
  });

  describe("_spareCalculator", function() {

    it("adds the first bowl to the previous frame if it was a spare", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      game.play();
      game.play();
      game.play();
      game.play();
      expect(game.allFrames[0].frameTotalScore).toEqual(15)
    });
  });

  describe("_strikeCalculator", function(){

    it("if this frame has two bowls, it adds them both the the previous strike", function() {
      game.currentFrame.wasAStrike = true;
      game.currentFrame.frameTotalScore = 10;
      game.allFrames.push(game.currentFrame);
      game.frameReset();
      spyOn(Math, 'floor').and.returnValue(4);
      game.play();
      game.play();
      expect(game.allFrames[0].frameTotalScore).toEqual(18)
    });
  });

  describe("_doubleStrikeCalculator", function() {

    it("if there are three strikes in a row, the first ball is worth 30", function() {
      spyOn(Math, 'floor').and.returnValue(10);
      game.play();
      game.play();
      game.play();
      expect(game.allFrames[0].frameTotalScore).toEqual(30)
    });
  });

  describe("_gameOver", function() {

    it("the game is over after the tenth frame", function() {
      spyOn(Math, 'floor').and.returnValue(4);
      for(var i=0; i<20; i++) {
        game.play();
      }
      expect(game.isGameOver).toBe(true);
    });

    it("the game isn't over after the tenth frame if a strike or spare is bowled", function() {
      spyOn(Math, 'floor').and.returnValue(10);
      for(var i=0; i<10; i++) {
        game.play();
      }
      expect(game.isGameOver).toBe(false);
    });
  });
});
