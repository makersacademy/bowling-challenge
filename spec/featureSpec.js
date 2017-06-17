describe("Bowling", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("Has a score of 0 by default", function(){
    expect(game.getTotalScore()).toEqual(0);
  });

  it("Starting a frame logs a new frame", function(){
    game.addFrame(new Frame(1,1));
    expect(game.getPlayedFrames()[0]).not.toBe(undefined);
  });

  it("Total score is calculated by the sum of each frames score", function(){
    game.addFrame(new Frame(1, 1));
    expect(game.getTotalScore()).toEqual(game.getPlayedFrames()[0].getScore());
  });

  it("Won't add a new frame if it is created with an illegal score", function(){
    expect(function() { game.addFrame(new Frame(6, 6)) }).toThrow(new Error("Illegal Score."))
    expect(game.playedFrames.length).toEqual(0)
  });

});
