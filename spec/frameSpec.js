'use strict';

describe(`Frame`, function(){

  let frame1;
  let frame10;

  beforeEach(function(){
    frame1 = new Frame(1);
    frame10 = new Frame(10);
  });

  it(`has a number; frame1 returns 1`, function(){
    expect(frame1.number).toEqual(1);
  });

  it(`has a number; frame10 returns 10`, function(){
    expect(frame10.number).toEqual(10);
  });

  it(`throws an error if passed less than 1`, function(){
    expect( function(){ new Frame(0); } ).toThrow(new Error(Frame.ERROR_FRAME_NUMBER_LESS_THAN_1));
  });

  it(`throws an error if passed more than 10`, function(){
    expect( function(){ new Frame(11); } ).toThrow(new Error(Frame.ERROR_FRAME_NUMBER_MORE_THAN_10));
  });

});