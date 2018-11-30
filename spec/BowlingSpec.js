'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins)
    }
  };

  it('checks that a frame exists', function() {
    expect(bowling.getFrame()).toEqual([]);
  });

  it('checks that you can roll a gutter game', function() {
    rollMany(0, 20)
    expect(bowling.score()).toEqual(0)
  });

  it('checks that you can roll a all ones game', function() {
    rollMany(1, 20)
    expect(bowling.score()).toEqual(20)
  });

});
