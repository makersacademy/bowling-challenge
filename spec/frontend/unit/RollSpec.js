'use strict';

describe('Roll', function(){
  var roll;

  beforeEach(function(){
    roll = new Roll;
  });

  describe('new', function(){

    it('should create an instance of Roll', function(){
      expect(roll instanceof Roll).toBe(true);
    });

  });

  describe('#setPinsKnocked', function(){

    it('sets the value of pinsKnocked', function(){
      expect(function(){roll.setPinsKnocked(4)}).not.toThrow();
    });

  });

  describe('#isSet', function(){

    it('set to true when pinsKnocked set', function(){
      roll.setPinsKnocked(4);
      expect(roll.isSet()).toBe(true);
    });

    it('set to false when pinsKnocked not set', function(){
      expect(roll.isSet()).toBe(false);
    });

  });

  describe('#getPinsKnocked', function(){

    it('gets the value of pinsKnocked', function(){
      roll.setPinsKnocked(4);
      expect(roll.getPinsKnocked()).toEqual(4);
    });

  });

  describe('#isStrike', function(){

    it('returns true when 10 pins knocked in a roll', function(){
      roll.setPinsKnocked(10);
      expect(roll.isStrike()).toBe(true);
    });

    it('returns false when less than 10 pins knocked in a roll', function(){
      roll.setPinsKnocked(5);
      expect(roll.isStrike()).toBe(false);
    });

  });


});
