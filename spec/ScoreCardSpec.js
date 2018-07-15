'use strict';

describe('ScoreCard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new ScoreCard();
  });

  it('adds a score to the first roll at the first frame', function(){
      scorecard.roll_1(5);
    expect(scorecard.getRoll_1()).toEqual(5);
  });

  it('should know if the first roll is a strike', function(){
      scorecard.roll_1(10);
    expect(scorecard.checkForStrike()).toEqual("strike")
  });

  it('should start with the first frame', function(){
    expect(scorecard.getCurrentFrame()).toEqual(1)
  });

  it('adds the current frame to the board', function(){
    scorecard.roll_1(5);
    scorecard.roll_2(3);
    scorecard.addToFrame();
    expect(scorecard.getBoard()).toEqual([[5,3],]);
  });


  it('should go to the next frame', function(){
    expect(scorecard.getNextFrame()).toEqual(2);
  });


  it('scoreboard starts with an empty object', function(){
    expect(scorecard.getScoreBoard()).toEqual([])
  });



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

  it('should know the total points of a frame', function(){
    scorecard.roll_1(3);
    scorecard.roll_2(4);
  expect(scorecard.getTotalFrame()).toEqual(7)
  });
});
