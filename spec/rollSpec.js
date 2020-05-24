'use strict';

describe(`Roll`, function(){

  let roll0;
  let roll10;

  beforeEach(function(){
    roll0 = new Roll(0);
    roll10 = new Roll(10);
  });

  it(`returns pinsDown 0`, function(){
    expect(roll0.pinsDown).toEqual(0);
  });

  it(`returns pinsDown 10`, function(){
    expect(roll10.pinsDown).toEqual(10);
  });

  it(`throws an error if passed more than 10`, function(){
    expect( function(){ new Roll(11); } ).toThrow(new Error(Roll.ERROR_ROLL_GREATER_THAN_10));
  });

  it(`throws an error if passed a negative number`, function(){
    expect( function(){ new Roll(-1); } ).toThrow(new Error(Roll.ERROR_ROLL_NEGATIVE));
  });


});
