describe('ScoreBoard', function(){

  var scoreboard 
  var frame
  var player

  beforeEach(function(){
    scoreboard = new ScoreBoard
    frame = new Frame
  });

  it('can add a frame', function(){
    scoreboard.getFrame(frame)
    expect(scoreboard.gameFrames.length).toEqual(1);
  });

  it('can determine if a frame was a strike', function(){
    frame.isStrike = true
    expect(scoreboard.isStrike(frame)).toEqual(true);
  });



});