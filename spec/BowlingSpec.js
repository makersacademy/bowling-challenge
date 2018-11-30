'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('checks that a frame exists', function() {
    expect(bowling.getFrame()).toEqual([]);
  });

  it('checks that you can roll a gutter game', function() {
    for (var i = 0; i < 20; i++) {
      bowling.roll(0)
    }
    expect(bowling.score()).toEqual(0)
  });

  it('checks that you can roll a all ones game', function() {
    for (var i = 0; i < 20; i++) {
      bowling.roll(1)
    }
    expect(bowling.score()).toEqual(20)
  });

});
