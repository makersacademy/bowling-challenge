describe("Game", function(){
  var game
  beforeEach(function(){
    game = new Game()
  })

  describe("#creation", function(){
    it("starts by creating a frame",function(){
      expect(game.currentFrame()).toEqual(1)
    });
  });
  describe("#addBalls", function(){
    it("adds balls to the active frame")
    it("changes targets when frame is complete")
  });
  describe("#scoring",function(){
    it("talks to the right module to do it's scoring for it")
  });
  describe("#isComplete",function(){
    it("knows when it is complete and stops adding frames")
  })
});
