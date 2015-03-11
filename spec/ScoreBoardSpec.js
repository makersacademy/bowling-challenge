describe('ScoreBoard', function(){

  var scoreboard 
  var player
  var frame1
  var frame2
  var frame3
  var frame4
  var frame5
  var frame6
  var frame7
  var frame8
  var frame9
  var frame10

  beforeEach(function(){
    scoreboard = new ScoreBoard();
    frame1 = new Frame(1)
    frame2 = new Frame(2)
    frame3 = new Frame(3)
    frame4 = new Frame(4)
    frame5 = new Frame(5)
    frame6 = new Frame(6)
    frame7 = new Frame(7)
    frame8 = new Frame(8)
    frame9 = new Frame(9)
    frame10 = new Frame(10)
  });

  function fillBoard(){
    scoreboard.addFrame(frame1)
    scoreboard.addFrame(frame2)
    scoreboard.addFrame(frame3)
    scoreboard.addFrame(frame4)
    scoreboard.addFrame(frame5)
    scoreboard.addFrame(frame6)
    scoreboard.addFrame(frame7)
    scoreboard.addFrame(frame8)
    scoreboard.addFrame(frame9)
    scoreboard.addFrame(frame10)
  };
    
  it('can add frames', function(){
    fillBoard();
    expect(scoreboard.gameFrames.length).toEqual(10);
  });

  it('knows when a frame scored a strike', function(){
    frame1.rollOneScore = 10;
    expect(scoreboard.isStrike(frame1)).toEqual(true);
  });

  it('knows when a frame has scored a half strike', function(){
    frame1.rollOneScore = 5;
    frame1.rollTwoScore = 5;
    expect(scoreboard.isHalfStrike(frame1)).toEqual(true); 
  });

  it('can return the index of a frame from the gameFrames array', function(){
    fillBoard();
    expect(scoreboard.getFrameIndex(frame1)).toEqual(0);
    expect(scoreboard.getFrameIndex(frame2)).toEqual(1);
    expect(scoreboard.getFrameIndex(frame3)).toEqual(2);
    expect(scoreboard.getFrameIndex(frame4)).toEqual(3);
  });

  it('knows when a frame does not have an item one or two places above it in the array', function(){
    fillBoard();
    expect(scoreboard.canCheck(frame8)).toEqual(true)
    expect(scoreboard.canCheck(frame9)).toEqual(false)
  });

});