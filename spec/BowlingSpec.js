'use strict';

describe ('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('score', function(){
    it('starts at zero', function(){
      expect(bowling.score).toEqual(0);
    });
  });


});
