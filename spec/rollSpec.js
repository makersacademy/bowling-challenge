'use strict';
describe('Roll', function(){
var roll;

beforeEach(function() {
  roll = new Roll();
});

it('shows the score for the first roll', function() {
  roll.firstRoll(3);
  expect(roll.finalScore()).toEqual(3);
});

it('sum of the first roll + second roll', function() {
  roll.firstRoll(3);
  roll.secondRoll(4);
  expect(roll.finalScore()).toEqual(7);
});
});
