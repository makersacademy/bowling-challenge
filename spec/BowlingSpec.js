'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins)
    }
  };

  it('can roll a gutter game', function () {
    rollMany(0, 20)
    expect(bowling.score()).toEqual(0)
  });

  it('can roll a game with all ones', function () {
    rollMany(1, 20)
    expect(bowling.score()).toEqual(20)
  });

  it('can roll a spare', function () {
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(3);
    rollMany(0, 17);
    expect(bowling.score()).toEqual(16);
  });

  it('can roll a strike', function() {
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(3);
    rollMany(0, 16);
    expect(bowling.score()).toEqual(26);
  });

  it('can roll a perfect game', function() {
    rollMany(10, 12);
    expect(bowling.score()).toEqual(300);
  });

});
