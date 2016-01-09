describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#init", function(){
    it("starts with total score 0", function() {
      expect(game.tot_score).toEqual(0);
    })
    it("starts with a number of played_frames of 0", function() {
      expect(game.playedFrames.length).toBe(0);
    })
  })

})
