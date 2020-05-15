
'use strict'

describe('Scorecard',function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard;
  });

  it('has a total default to zero', function(){
    expect(scorecard.totalScore()).toEqual(0);
  });

  // it can add knocked pins together
  it('can add two rolls', function(){
    expect(scorecard.frameScore(5,3)).toEqual(8)
  });

  // is spare?
  it('can result a spare', function(){
    expect(scorecard.isSpare(6,4)).toBe(true)
  });

  // is strike?
  it('can result a strike', function(){
    expect(scorecard.isStrike(5,5)).toBe(true)
  });


  describe('score is a spare', function(){
    beforeEach(function(){
      scorecard.isStrike.and.returnValue(true);
    });

    // spare = add 10 point and add next array item to this total
    // it('calculates spare scores', function(){
    //   scorecard.input(5,5)
    //   expect(scorecard.framesScore).toContain(10)
    //   scorecard.input(4,1)
    //   expect(scorecard.framesScore).toContain(14)
    // });
  });
});

