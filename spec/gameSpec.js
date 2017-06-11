describe("Bowling a frame", function(){

  var game;

  beforeEach(function(){
    game = new Game;
  });

  it("Creates a new frame when ball is bowled", function(){
    game.bowlBall()
    expect(game.getPlayedFrames()).toContain(frame01)
  });
});
