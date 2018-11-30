'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('score starts at 0', function() {
   expect(scorecard.getCurrentScore()).toEqual(0);
  });
  it('score is 9 after player hits 9 pins', function() {
    scorecard.updateScoreAfterBowl(9);
    expect(scorecard.getCurrentScore()).toEqual(9);
  });
  it('score is 8 after frame 1 with 2 bowls - 3 and then 5', function(){
    scorecard.updateScoreAfterBowl(3);
    scorecard.updateScoreAfterBowl(5);
    expect(scorecard.getCurrentScore()).toEqual(8);
  });
  it('is frame 2 after bowls of 2 and 4 in frame 1', function(){
    scorecard.updateScoreAfterBowl(2);
    scorecard.updateScoreAfterBowl(4);
    expect(scorecard.getFrame()).toEqual(2);
  });
  it('is frame 2 after a strike', function() {
    scorecard.updateScoreAfterBowl(10);
    expect(scorecard.getFrame()).toEqual(2);
  });
  it('has a score of 12 after a strike, 1 then 0', function() {
    scorecard.updateScoreAfterBowl(10);
    scorecard.updateScoreAfterBowl(1);
    scorecard.updateScoreAfterBowl(1);
    expect(scorecard.getCurrentScore()).toEqual(12);
  });

});
