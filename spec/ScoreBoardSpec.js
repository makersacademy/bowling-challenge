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
    scoreboard.scoreProcess();
  };
    
  it('can add frames', function(){
    fillBoard();
    expect(scoreboard.gameFrames.length).toEqual(10);
  });

  it('add 30 to the first frame score when there are 3 consectutive strikes', function(){
    frame1.isStrike = true
    frame2.isStrike = true
    frame3.isStrike = true
    fillBoard();
    expect(scoreboard.frameScores[0]).toEqual(30);
  });

  it('add 20 to the first frame score when a half strike follows a strike', function(){
    frame1.isStrike = true
    frame2.isHalfStrike = true
    fillBoard();
    expect(scoreboard.frameScores[0]).toEqual(20);
  });

  it('adds the scores normally when no strikes are recorded', function(){
    frame1.rollOneScore = 4;
    frame1.rollTwoScore = 3;
    fillBoard();
    expect(scoreboard.frameScores[0]).toEqual(7);
  });



});