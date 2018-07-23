'use strict';

describe('Bowling', function() {
  var bowling = new Bowling();

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('should have an array to hold rolls', function(){
    expect(bowling.scores).toEqual([]);
  });

  it('can add rolls to the scores', function(){
    bowling.rolls(6);
    expect(bowling.scores).toEqual([6]);
  });

  it('can add multiples frame to the scores', function(){
    bowling.rolls(2);
    bowling.rolls(6);
    bowling.rolls(2);
    expect(bowling.scores).toEqual([2, 6, 2]);
  });

  it('can sum the total score', function(){
    for (var i = 0; i < 20; i++) {
      bowling.rolls(2);
    }
    expect(bowling.score()).toBe(40);
  });

  it('can roll a zero game', function(){
    for (var i = 0; i < 20; i++) {
      bowling.rolls(0);
    }
    expect(bowling.score()).toBe(0);
  })

  it('can calculate spare bonus', function(){
    for (var i = 0; i < 17; i++) {
      bowling.rolls(0);
    }
    bowling.rolls(4);
    bowling.rolls(6);
    bowling.rolls(2);
    expect(bowling.score()).toBe(14)
  });
});
