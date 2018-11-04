describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("getTotalScore", function() {
    it("returns the current score", function () {
      frame = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frameScore = frame.getCurrentScore();

      game.updateTotalScore(frameScore);
      expect(game.getTotalScore()).toBe(6);
    });
  });

  describe("frameNumber", function() {
    it("starts at one", function() {
      expect(game.frameNumber()).toBe(1)
    });

    it("tracks the frame number that the user is on", function(){
      frame = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frameScore = frame.getCurrentScore();

      game.updateTotalScore(frameScore)
      expect(game.frameNumber()).toBe(2);
    });

    it("finsihes game after the 10th frame", function(){
      frame = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frameScore = frame.getCurrentScore();

      for(i = 0; i < 10; i++) {game.updateTotalScore(frameScore)}
      expect(game.frameNumber()).toBe("Game over!");
    });
  });
});
