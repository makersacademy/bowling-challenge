"use strict"

describe('Roll', function(){

  var roll;
  var knockedPin;

  beforeEach(function(){
    knockedPin = 4
    roll = new Roll(knockedPin)
  })

  it('records the number of pin knocked', function(){
    expect(roll.numberOfKnockedPin()).toEqual(4)
  });

});
