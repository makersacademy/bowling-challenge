'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach( function() {
    bowling = new Bowling();
  })
  
  describe('#score', function(){
    describe('should return the total score for each frame', function(){

      it('e.g. return [0], for [0]', function(){
        expect(bowling.score([0])).toEqual([0])
      })

      it('e.g. return [0,0], for [0,0,0]', function(){
        expect(bowling.score([0,0,0])).toEqual([0,0])
      })

      it('e.g. return [0,0,0], for [0,0,0,0,0]', function(){
        expect(bowling.score([0,0,0,0,0])).toEqual([0,0,0])
      })

      it('e.g. return [0,0,0,0], for [0,0,0,0,0,0,0]', function(){
        expect(bowling.score([0,0,0,0,0,0,0])).toEqual([0,0,0,0])
      })
    })
  });
});
