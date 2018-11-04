'use strict';

describe('Roll', function(){
  var roll;
  let SCORE = 4;

  beforeEach(function(){
    roll = new Roll(SCORE);
  });

  it('can return the score', function(){
    expect(roll.getScore()).toEqual(SCORE);
  });
});
