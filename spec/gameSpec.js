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
});
