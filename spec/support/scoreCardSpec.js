'use strict';

describe('Scorecard', function(){
  var scorecard;
  beforeEach(function(){

    scorecard = new ScoreCard();
  });

  it('calculates score for a normal turn', function(){
  })

  it('calculates score when player gets a spare', function(){
    scorecard.calculateScore(3,5,true,false);
    expect(scorecard.score).toEqual(11);
  });
});

  it('calculates score when players gets a strike', function(){
    scorecard.calculateScore(3,5,false, true);
    expect(scorecard.score).toEqual(18)
  });

  it('tallies up total score', function(){
    scorecard.recordScore(8);
    scorecard.recoreScore(4);
    scorecard.calcTotal();
    expect(scorecard.total).toEqual(12);
    expect(scorecard.results).toEqual([8,4]);

  });

});
