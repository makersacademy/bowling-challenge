'use strict';

describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('returns a standard frame', function(){
    expect(bowling.standardFrame(4, 4)).toEqual(8);
  });

  it('returns a stricke', function(){
    expect(bowling.stricke()).toEqual(10);
  });

  it('returns a spare frame', function(){
    expect(bowling.spare(3, 7)).toEqual(10);
  });
});
