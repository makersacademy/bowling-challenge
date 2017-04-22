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

    it("adds the first bowl to the previous frame if it was a spare", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      game.play();
      game.play();
      game.play();
      game.play();
      expect(game.allFrames[0].frameTotalScore).toEqual(15)
    });
  });
});
