'use strict';

describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('Bowling', function(){

    it('starts with the first roll is zero', function(){
      expect(bowling.first_throw()).toEqual(0)
    });
    it('has a gutter roll', function(){
      for (var i = 0; i < 20 ; i++) {
        bowling.your_score();
      }
      expect(bowling.your_score()).toEqual(0)
    });
  });

});
