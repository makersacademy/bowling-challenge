'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('shows count as zero at the start of the game', function(){
    expect(bowling.totalScore).toEqual(0);
  });

  it('allows to roll a ball and return a number of pins hit', function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    bowling.roll();
    expect(bowling.totalScore).not.toEqual(0);
  });
});
