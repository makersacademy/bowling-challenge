'use strict'

describe("Roll", function(){

  it('should return true if roll is valid', function(){
    roll = new Roll();
    expect(roll.validRoll(3,10)).toBe(true);
  });

  it('should only allow rolls where less that number of pins remaining', function(){
    roll = new Roll();
    expect(function(){
      roll.validRoll(5,2);
    }).toThrowError("this is an illegal roll")
  });

  it('should only accept a number between 0 and 10', function(){
    roll = new Roll();
    expect(function(){
      roll.validRoll(11,10);
    }).toThrowError("this is an illegal roll")
  });

});