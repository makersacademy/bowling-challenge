
'use strict'

describe('Scorecard',function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard;
  });

  it('has a total default to zero', function(){
    expect(scorecard.totalScore()).toEqual(0);
  });

  // it can add knocked pins together to total that frame score
  it('can add two rolls', function(){
    expect(scorecard.frameScore(5,3)).toEqual(8)
  });

  // it can add on from the last frame
  it('can add on from the last score', function() {
    scorecard.input(1,3)
    scorecard.input(5,4)
    expect(scorecard.latestScore()).toEqual(13)
  });

  // is spare?
  it('can result a spare', function(){
    expect(scorecard.isSpare(6,4)).toBe(true)
  });

  // is strike?
  it('can result a strike', function(){
    expect(scorecard.isStrike(10,0)).toBe(true)
  });

  it('calculates frame score', function(){
    // first bowl
    scorecard.input(4,3) // first bowl
    expect(scorecard.frameScore(4,3)).toEqual(7) // scores 7
    scorecard.input(5,4) // next frame 
    expect(scorecard.frameScore(5,4)).toEqual(9) // scores 9
    expect(scorecard.latestScore()).toEqual(16)
  });

  // spare = total 10 + add next array item to this total
  it('calculates normal scores', function(){
    // first bowl
    scorecard.input(4,3) // first bowl
    scorecard.input(5,5) // bowls a spare, 10 points
    scorecard.input(5,2) // next round first bowl is 5
    expect(scorecard.frameScoreBefore()).toEqual(22) // previous score goes up by next bowl
  });

  // spare = total 10 + add next array item to this total
  it('calculates spare scores', function(){
    // first bowl
    scorecard.input(4,3) // first bowl
    scorecard.input(5,5) // bowls a spare, 10 points
    scorecard.input(5,2) // next round first bowl is 5
    expect(scorecard.frameScoreBefore()).toEqual(22) // previous score goes up by next bowl
  });


  // spare = total 10 + add next array item to this total
  it('calculates strike scores', function(){
    // first bowl
    scorecard.input(4,3) // first bowl = 7
    scorecard.input(10,0) // bowls a strike, 10 points (17)
    scorecard.input(5,2) // adds next 2 bowls on (24)
    expect(scorecard.frameScoreBefore()).toEqual(24) // previous score goes up by next bowl
  });




});

