'use strict';

describe('Scorer unit tests:', function(){
  var scorer;

  beforeEach (function(){
      scorer = new Scorer();
  });

  it('#isSpare returns true if a spare is scored', function(){
    expect(scorer.isSpare(7, 3)).toBeTruthy();
  });

  it('#isSpare returns false if a spare is not scored', function(){
    expect(scorer.isSpare(7, 1)).toBeFalsy();
  });

  it('#isStrike  returns true if a strike is scored', function(){
    expect(scorer.isStrike(10)).toBeTruthy();
  });

  it('#isStrike returns false if a strike is not scored', function(){
    expect(scorer.isStrike(7)).toBeFalsy();
  });

  it('#incrementFrame increases frame by one', function(){
    scorer.incrementFrame()
    expect(scorer.frame()).toEqual(2);
  });

  it('#islessTen returns true if roll is less than 10', function(){
    expect(scorer.islessTen(7)).toBeTruthy();
  });

  it('#islessTen returns false if roll is 10', function(){
    expect(scorer.islessTen(10)).toBeFalsy();
  });

  it('#calcOpenFrameScore returns sum of roll A and roll B', function(){
    scorer.calcOpenFrameScore(6, 3);
    expect(scorer.score()).toEqual(9);
  });

  it('#calcSpareScore returns 10 plus roll A', function() {
    scorer.calcSpareScore(6);
    expect(scorer.score()).toEqual(16);
  });

  it('#calcSingleStrikeScore returns 10 plus roll A plus roll B', function() {
    scorer.calcSingleStrikeScore(4, 2);
    expect(scorer.score()).toEqual(16);
  })

  it('#calcDoubleStrikeScore returns 20 plus roll A', function() {
    scorer.calcDoubleStrikeScore(4);
    expect(scorer.score()).toEqual(24);
  })

});
