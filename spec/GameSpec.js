describe("Game", function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it("playing the game initialises frame 1", function(){
    game.play()
    expect(game.currentFrame).toEqual(new Frame(1));
  });

  it("game begins with a score of 0", function(){
    expect(game.getTotalScore()).toEqual(0);
  });

});
