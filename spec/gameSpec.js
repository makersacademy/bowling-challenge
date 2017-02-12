describe("Game", function(){
  var game
  var frame
  beforeEach(function(){
    game = new Game()
    frame = game._getCurrentFrame()
  });

  describe("#addBall", function(){
    it("adds balls to the active frame",function(){
      spyOn(frame,"addBall")
      game.addBall(4)
      expect(frame.addBall).toHaveBeenCalledWith(4)
    });
  });

  describe("#iscomplete",function(){
    it("returns false until 10th frame is complete",function(){
      expect(game.isComplete()).toEqual(false)
    });
    it("returns true after game is concluded",function(){
      for(var i = 1; i <= 10; i++){
        game.addBall(4)
        game.addBall(4)
      }
      expect(game.isComplete()).toEqual(true)
    });
  });

  describe("#_LastFrame",function(){
    it("sets the special rules for the last frame")
  });
});
