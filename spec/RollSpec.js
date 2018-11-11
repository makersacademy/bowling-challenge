'use strict';

describe('Roll', function(){
  var roll;
  let SCORE = 4;

  beforeEach(function(){
    roll = new Roll(SCORE);
  });

  describe('getScore', function(){
    it('can return the score', function(){
      expect(roll.getScore()).toEqual(SCORE);
    });
  });
});
