'use strict';

describe('bowling', function(){
  var bowling;
  beforeEach(function(){
    bowling = new Bowling
  });

  it('It should have an empty array', function(){
    expect(bowling._rolls).toEqual([]);
  });

  describe('#roll', function(){
    it('Should allow a player to enter a roll', function(){
      for (var i = 0; i < 20; i++) {
        bowling.roll(1);
      }
      expect(bowling.score).toEqual(20);
    });

  });
});
