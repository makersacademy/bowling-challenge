describe("Bowling a frame", function(){

  var game;

  beforeEach(function(){
    game = new Game;
  });

  it("Starts with a score of 0", function(){
    expect(game.score).toEqual(0);
  });

  it("Creates a new frame when ball is bowled", function(){
    game.bowlBall();
    expect(game.getPlayedFrames()).toContain(frame01);
  });


});
