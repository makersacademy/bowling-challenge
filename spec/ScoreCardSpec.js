// 'use strict';

describe('ScoreCard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new ScoreCard();
  });

  it('adds a score to the first roll at the frame', function(){
      scorecard.roll_1(5);
    expect(scorecard.getCurrentFrame()).toEqual(5);

  });
});
