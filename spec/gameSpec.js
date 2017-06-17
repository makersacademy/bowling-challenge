describe("Bowling a frame", function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame(1,1);
    strike = new Frame(10);
    spare = new Frame(5,5);
    gutter = new Frame(0,0);
  });

  it("Starts with a score of 0", function(){
    expect(game.totalScore).toEqual(0);
  });

  it("Adds a new frame", function(){
    game.addFrame(frame);
    expect(game.getPlayedFrames()).toContain(frame);
  });

  it("Can't add more than 10 frames", function(){
    for(i = 0; i < 10 ; i ++ ){
      game.addFrame(frame);
    };
    expect(function() { game.addFrame(frame) }).toThrow(new Error("You can only play 10 frames per game."));
    expect(game.playedFrames.length).toEqual(10);
  });

  it("Frames with a spare accumulate the next frames score", function(){
    game.addFrame(spare);
    game.addFrame(frame);
    expect(game.getTotalScore()).toEqual(14);
  });

});
