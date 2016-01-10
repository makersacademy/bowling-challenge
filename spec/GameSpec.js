describe("Game", function(){
  beforeEach(function(){
    game = new Game;
  });

  it("starts out with 0 frames completed", function(){
    expect(game.frames).toEqual([]);
  });

  it("allows me to play a frame", function(){
    game.playFrame();
    expect(game.frames).toEqual([new Frame]);
  });


});
