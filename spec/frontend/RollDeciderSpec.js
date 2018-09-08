"use strict";

describe('RollDecider', function() {
  //var RollDecider = require('../../public/js/RollDecider');
  var rollDecider;

  beforeEach(function() {
    rollDecider = new RollDecider();
  })

  it('Instantiates with frame = 1 and roll = 1', function() {
    expect(rollDecider.nextTurn).toEqual({ frame: 1, roll: 1})
  });

  it('Increments roll if not a strike (frame = 1 and roll = 2)', function() {
    expect(rollDecider.increment(5)).toEqual({ frame: 1, roll: 2 })
  });

  it('Increments frame if a strike (frame = 2 and roll = 1)', function() {
    expect(rollDecider.increment(10)).toEqual({ frame: 2, roll: 1 })
  });

  it('Increments frame if two rolls have been made (frame = 2 and roll = 1)', function() {
    for (var i = 0; i < 2; i++) {
      rollDecider.increment(5);
    }
    expect(rollDecider.nextTurn).toEqual({ frame: 2, roll: 1 })
  });

  it('Increments correctly after 3 turns (frame = 2 and roll = 2)', function() {
    for (var i = 0; i < 3; i++) {
      rollDecider.increment(5);
    }
    expect(rollDecider.nextTurn).toEqual({ frame: 2, roll: 2 })
  });

  it('Increments correctly after 18 turns (frame = 10 and roll = 1)', function() {
    for (var i = 0; i < 18; i++) {
      rollDecider.increment(5);
    }
    expect(rollDecider.nextTurn).toEqual({ frame: 10, roll: 1 })
  });

  it('Increments correctly after 9 strikes (frame = 10 and roll = 1)', function() {
    for (var i = 0; i < 9; i++) {
      rollDecider.increment(10);
    }
    expect(rollDecider.nextTurn).toEqual({ frame: 10, roll: 1 })
  });

  it('Allows three rolls in 10th frame (frame = 10 and roll = 3)', function() {
    for (var i = 0; i < 20; i++) {
      rollDecider.increment(5);
    }
    expect(rollDecider.nextTurn).toEqual({ frame: 10, roll: 3 })
  });

  it('Allows three rolls in 10th frame regardless of strikes (frame = 10 and roll = 3)', function() {
    for (var i = 0; i < 11; i++) {
      rollDecider.increment(10);
    }
    expect(rollDecider.nextTurn).toEqual({ frame: 10, roll: 3 })
  });

});
