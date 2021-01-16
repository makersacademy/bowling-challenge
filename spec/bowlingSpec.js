'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach( function() {
    bowling = new Bowling();
  })

  describe('#score', function(){
    describe('should return the total score for each frame', function(){
      it('e.g. return [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], for [1,1,1,1,1,1,1,1,1,1]', function(){
        expect(bowling.score([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).toEqual([2,4,6,8,10,12,14,16,18,20])
      })
    })
  });
});
