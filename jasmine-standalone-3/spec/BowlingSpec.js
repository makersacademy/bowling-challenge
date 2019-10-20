'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

it('starts at 0 points', function() {
  expect(bowling.getCurrentScore()).toEqual(0);
});

it('takes points from first throw', function () {
  bowling.firstThrow();
  expect(bowling.getCurrentScore()).toEqual(1)
});

it('increases score with up', function() {
  bowling.up();
  expect(bowling.getCurrentScore()).toEqual(1);
});

it('takes a maximum frame score of 10', function() {
  for (var i = 0; i < 11; i++) {
    bowling.up();
  }
  expect(bowling.getCurrentScore()).toEqual(1);
});

});
