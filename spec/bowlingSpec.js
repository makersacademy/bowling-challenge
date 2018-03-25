'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

it('zero points at the beginning of the game', function(){
  expect(bowling.getPointsPerRoll()).toEqual([]);
});

it('gutter game', function(){
  bowling.roll(0);
  expect(bowling.getPointsPerRoll()).toEqual([0]);
})

});
