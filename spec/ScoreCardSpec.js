'use strict';

describe('ScoreCard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new ScoreCard();
  });

  it('scoreboard starts with an empty array', function(){
    expect(scorecard.getScoreBoard()).toEqual([])
  });

  it('should start with the first frame', function(){
    expect(scorecard.getFrameNumber()).toEqual(1)
  });

  it('adds a score to the first roll', function(){
      scorecard.roll_1(5);
    expect(scorecard.getRoll_1()).toEqual(5);
  });

  it('should know if the first roll is a strike', function(){
      scorecard.roll_1(10);
    expect(scorecard.checkForStrike()).toEqual("strike")
  });

// --------

  it('should go to the next frame when hit a strike', function(){
      scorecard.roll_1(10);
      expect(scorecard.getNextFrame()).toEqual(2);
  });


// --------


  it('adds a score to the second roll at the first frame', function(){
      scorecard.roll_1(5);
      scorecard.roll_2(3);
    expect(scorecard.getRoll_2()).toEqual(3);
  });

  it('should know if the second roll is a spare', function(){
    scorecard.roll_1(5);
    scorecard.roll_2(5);
    expect(scorecard.checkForSpare()).toEqual("spare")
  });



  it('adds the current frame to the board', function(){
    scorecard.roll_1(5);
    scorecard.roll_2(3);
    scorecard.addFrameToBoard();
    expect(scorecard.getBoard()).toEqual([[5,3],]);
  });


  it('should know the total points of a frame', function(){
    scorecard.roll_1(3);
    scorecard.roll_2(4);
  expect(scorecard.getTotalFrame()).toEqual(7)
  });
});
