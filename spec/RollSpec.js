'use strict'

describe("Roll", function(){

  let roll = new Roll();

  beforeEach(function(){
    roll = new Roll();
  });

  it('should return true if roll is valid', function(){
    expect(roll.validRoll(3,10)).toBe(true);
  });

  it('should only allow rolls where less that number of pins remaining', function(){
    expect(function(){
      roll.validRoll(5,2);
    }).toThrowError("this is an illegal roll")
  });

  it('should only accept a number between 0 and 10', function(){
    expect(function(){
      roll.validRoll(11,10);
    }).toThrowError("this is an illegal roll")
  });

});