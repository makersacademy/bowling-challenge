describe("Bowling", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("Bowling a ball Creates a frame", function(){
    game.bowlBall();
    expect(game.getPlayedFrames()[0]).not.toBe(undefined);
  });
});
