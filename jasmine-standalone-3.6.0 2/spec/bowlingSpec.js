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
      rollMany(1, 20);
      expect(bowling.score).toEqual(20);
    });
    it('should be able to roll a gutter game', function(){
      rollMany(0,20)
      expect(bowling.score).toEqual(0);
    });
    it('should return the correct score when spare is rolled', function(){
      bowling.roll(5)
      bowling.roll(5)
      bowling.roll(3)
      rollMany(0,17)
      expect(bowling.score).toEqual(16);
    });
    it('should return the correct score when a strike is rolled', function(){
      bowling.roll(10)
      bowling.roll(1)
      bowling.roll(1)
      rollMany(0,17)
      expect(bowling.score).toEqual(14);
    });
    it('should return the correct score when perfect game is rolled', function(){
      rollMany(10,12)
      expect(bowling.score).toEqual(300);
    });
  });

  describe('#reset', function(){
    it('Should allow a reset of score', function(){
      bowling.roll(10)
      bowling.roll(1)
      bowling.roll(1)
      rollMany(0,17)
      bowling.reset()
      expect(bowling._rolls).toEqual([]);
    });
  });

  function rollMany(pins, rolls){
    for (let i = 0; i < rolls; i++){
      bowling.roll(pins);
    }
  }
});
