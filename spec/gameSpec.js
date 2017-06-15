describe("Bowling a frame", function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame(1,1);
  });

  it("Starts with a score of 0", function(){
    expect(game.totalScore).toEqual(0);
  });

  it("Adds a new frame", function(){
    game.addFrame(frame);
    expect(game.getPlayedFrames()).toContain(frame);
  });

  it("Can't add more than 10 frames", function(){
    for(i=0;i<11;i++1){
      game.addFrame(frame);
      // Expect an error saying "You can't have more than 10 frames in a game"
    }
  });

});
