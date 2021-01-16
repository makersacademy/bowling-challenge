'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach( function() {
    bowling = new Bowling();
  })

  describe('#score', function(){
    describe('should return the total score for each frame', function(){
      // it('e.g. return [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], for [1,1,1,1,1,1,1,1,1,1]', function(){
      //
      //   expect(bowling.score([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).toEqual([2,4,6,8,10,12,14,16,18,20])
      // })
      //
      // it('e.g. return [15,30,45,60,75,90,105,120,135,140], for [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0]', function(){
      //   expect(bowling.score([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0])).toEqual([15,30,45,60,75,90,105,120,135,140])
      // })
      //
      // it('e.g. return [16,21], for [10,5,1]', function(){
      //   expect(bowling.score([10,5,1])).toEqual([16,22])
      // })
      //
      // it('e.g. return [25,41,47], for [10,10,5,1]', function(){
      //   expect(bowling.score([10,10,5,1])).toEqual([25,41,47])
      // })

      it('e.g. return [30,60,90,120,150,180,210,210,210,210], for [10,10,10,10,10,10,10,10,0,0]', function(){
        expect(bowling.score([10,10,10,10,10,10,10,10,10,0,0])).toEqual([30,60,90,120,150,180,210,230,240,240])
      })
    })
  });
});
