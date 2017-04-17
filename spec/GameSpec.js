describe("Game", function(){
  beforeEach(function(){
    game = new Game;
  });

  it("starts out with 0 frames completed", function(){
    expect(game.frames).toEqual([]);
  });

  it("allows me to play a frame", function(){
    spyOn(Math, "random").and.returnValue(0.5)
    game.playFrame();
    expect(game.frames[0]).toEqual(new Frame().shots);
  });
});
