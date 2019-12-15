'use strict';

describe('Bowling', function(){
  var bowling;
  
  beforeEach(function(){
    bowling = new Bowling;
  })

  it('resets a game', function(){
    expect(bowling.reset()).toEqual();
  })

  it('calculates a score of a gutter game', function(){
    bowling.roll([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(bowling.score()).toEqual(0);
  })

  it('can roll all 2s', function(){
    bowling.roll([2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2]);
    expect(bowling.score()).toEqual(40);
  })

  it('can roll a spare', function(){
    bowling.roll([6,4, 3,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(bowling.score()).toEqual(16);
  })

  it('can roll a strick', function(){
    bowling.roll([10,3, 4,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(bowling.score()).toEqual(24);
  })
})