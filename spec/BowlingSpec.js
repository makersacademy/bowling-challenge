'use strict';

describe('Bowling', function() {
  var bowling = new Bowling();

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('should have an object to hold scores', function(){
    expect(bowling.score).toEqual([]);
  });

  it('can add a frame to the scores', function(){
    bowling.roll(2, 4);
    expect(bowling.score).toEqual([[2, 4]]);
  });

  it('can add multiples frame to the scores', function(){
    bowling.roll(2, 4);
    bowling.roll(3, 6);
    expect(bowling.score).toEqual([[2, 4], [3 ,6]]);
  });
})
