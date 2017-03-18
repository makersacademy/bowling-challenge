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

  describe('setPinsKnocked', function(){

    it('sets the value of pinsKnocked', function(){
      expect(function(){roll.setPinsKnocked(4)}).not.toThrow();
    });

  });

  describe('getPinsKnocked', function(){

    it('gets the value of pinsKnocked', function(){
      roll.setPinsKnocked(4);
      expect(roll.getPinsKnocked()).toEqual(4);
    });

  });

});
