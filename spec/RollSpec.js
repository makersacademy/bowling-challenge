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


});
