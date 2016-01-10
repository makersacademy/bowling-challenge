describe("Game", function(){
  beforeEach(function(){
    game = new Game;
    currentFrame = {
      shotOne: function() {},
    }
  });

  it("initializes game with a score of 0", function(){
    expect(game.score).toEqual(0);
  });

  it("initializes game at frame 1", function(){
    expect(game.frameCount).toEqual(1);
  });

  it("frameCount increases to 2 after the second shot", function() {
      spyOn(Math, 'random').and.callFake(function() { return 0.5; });
    game.playFrame();
    game.playFrame();
    expect(game.frameCount).toEqual(2);
  });

  it("does not give a second shot if a strike was achieved", function(){
    spyOn(Math, 'random').and.callFake(function() { return 0.95; });
    game.playFrame();
    expect(game.frameCount).toEqual(2);
  });

  describe("when atleast one pin is hit", function(){

    beforeEach(function() {
      spyOn(Math, 'random').and.callFake(function() { return 0.5; });
    });

    it("changes score when player takes a shot and hits pins", function(){
      game.playFrame();
      expect(currentFrame.shotOne).toHaveBeenCalled
      expect(game.score).not.toEqual(0);
    });
  })
});
