"use strict";

describe('TurnIncrementer', function() {
  //var RollDecider = require('../../public/js/RollDecider');
  var turnIncrementer;

  beforeEach(function() {
    turnIncrementer = new TurnIncrementer();
  })

  it('Instantiates with frame = 1 and roll = 1', function() {
    expect(turnIncrementer.nextTurn).toEqual({ frame: 1, roll: 1});
  });

  describe('.incrementFrame returns the next frame and roll', function() {

    it('Increments frame (frame = 2 and roll = 1)', function() {
      expect(turnIncrementer.incrementFrame()).toEqual({ frame: 2, roll: 1 })
    });
  });

  describe('.incrementTurn returns the next frame and roll', function() {
    it('Increments roll (frame = 1 and roll = 2)', function() {
      expect(turnIncrementer.incrementTurn()).toEqual({ frame: 1, roll: 2 });
    });
  });

  describe('Use cases', function() {
    it('Increments frame if two rolls have been made (frame = 2 and roll = 1)', function() {
      for (var i = 0; i < 2; i++) {
        turnIncrementer.incrementTurn();
      }
      expect(turnIncrementer.nextTurn).toEqual({ frame: 2, roll: 1 })
    });

    it('Increments correctly after 3 turns (frame = 2 and roll = 2)', function() {
      for (var i = 0; i < 3; i++) {
        turnIncrementer.incrementTurn();
      }
      expect(turnIncrementer.nextTurn).toEqual({ frame: 2, roll: 2 })
    });

    it('Increments correctly after 18 turns (frame = 10 and roll = 1)', function() {
      for (var i = 0; i < 18; i++) {
        turnIncrementer.incrementTurn();
      }
      expect(turnIncrementer.nextTurn).toEqual({ frame: 10, roll: 1 })
    });

    it('Increments correctly after 9 strikes (frame = 10 and roll = 1)', function() {
      for (var i = 0; i < 9; i++) {
        turnIncrementer.incrementFrame();
      }
      expect(turnIncrementer.nextTurn).toEqual({ frame: 10, roll: 1 })
    });

    it('Allows three rolls in 10th frame (frame = 10 and roll = 3)', function() {
      for (var i = 0; i < 20; i++) {
        turnIncrementer.incrementTurn();
      }
      expect(turnIncrementer.nextTurn).toEqual({ frame: 10, roll: 3 })
    });

    it('Allows three rolls in 10th frame regardless of strikes (frame = 10 and roll = 3)', function() {
      for (var i = 0; i < 11; i++) {
        turnIncrementer.incrementFrame();
      }
      expect(turnIncrementer.nextTurn).toEqual({ frame: 10, roll: 3 })
    });
  });
});
