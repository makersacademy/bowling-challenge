describe("Bowling a frame", function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame(new Rack)
  });

  it("Starts with a score of 0", function(){
    expect(game.totalScore).toEqual(0);
  });

  it("Creates a new frame", function(){
    game.startFrame(frame);
    expect(game.getPlayedFrames()).toContain(frame);
  });



});
