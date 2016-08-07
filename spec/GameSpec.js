describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("game begins at frame 1", function(){
    expect(game.getFrameNumber()).toEqual(1);
  });

  it("game begins with a score of 0", function(){
    expect(game.getTotalScore()).toEqual(0);
  });


});
