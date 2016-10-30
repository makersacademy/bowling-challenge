'use strict';

describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling;
  });

  describe('Bowling', function(){


    it('has a gutter roll', function(){
      for (var i = 0; i < 20 ; i++) {
        bowling.roll(0)
      }
      expect(bowling.score).toEqual(0)
    });
    it('Can score a game of ones', function(){
      for (var i = 0; i < 20 ; i++) {
        bowling.roll(1);
      }
      expect(bowling.yourScore()).toEqual(20)
    });
  });

});
