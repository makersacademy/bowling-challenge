describe("Bowling", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("Has a score of 0 by default", function(){
    expect(game.getTotalScore()).toEqual(0);
  });

  it("Starting a frame logs a new frame", function(){
    game.startFrame("frame");
    expect(game.getPlayedFrames()[0]).not.toBe(undefined);
  });

  it("Total score is calculated by the sum of each frames score", function(){
    game.startFrame(new Frame(new Rack));
    expect(game.getTotalScore()).toEqual(game.getPlayedFrames()[0].getScore());
  });

});
