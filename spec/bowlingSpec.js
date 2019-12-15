'use strict';

describe('Bowling', function(){
  var bowling;
  
  beforeEach(function(){
    bowling = new Bowling;
  })

  it('resets a game', function(){
    expect(bowling.reset()).toEqual([]);
  })

  it('calculates the score of a gutter game', function(){
    bowling.roll([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(bowling.calculateScore()).toEqual(0);
  })

  it('calculates the score of the 1st frame', function(){
    bowling.pinsDown(3);
    bowling.pinsDown(6);
    expect(bowling.calculateScore()).toEqual(9);
  })

  it('can roll all 2s', function(){
    bowling.roll([2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2]);
    expect(bowling.calculateScore()).toEqual(40);
  })

  it('can roll a spare', function(){
    bowling.roll([6,4, 3,2, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(bowling.calculateScore()).toEqual(18);
  })

  it('can roll a strick', function(){
    bowling.roll([10,3, 4,5, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(bowling.calculateScore()).toEqual(29);
  })

  it('calculates a score of a perfect game', function(){
    bowling.roll([10,10, 10,10, 10,10, 10,10, 10,10, 10,10, 10,10, 10,10, 10,10, 10,10]);
    expect(bowling.calculateScore()).toEqual(300);
  })
})