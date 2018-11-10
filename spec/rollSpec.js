'use strict';
describe('Roll', function(){
var roll;
 beforeEach(function() {
  roll = new Roll();
});

it('Adds the number from the first roll to the roll array', function() {
   roll.firstRoll(3);
   expect(roll.rolls).toEqual([3]);
 });

 it('Adds the number from the second roll to the roll array', function() {
   roll.firstRoll(3);
   roll.secondRoll(10);
   expect(roll.rolls).toEqual([3,10]);
 });

 it('sum of the first roll + second roll', function() {
  roll.firstRoll(3);
  roll.secondRoll(4);
  expect(roll.finalScore()).toEqual(7);
});

it('Checks if the first roll is Strike', function() {
   roll.firstRoll(10);
   expect(roll.isStrike()).toBe(true);
 });
  it('Checks if the first + second roll total is Spare', function() {
   roll.firstRoll(5);
   roll.secondRoll(5);
   expect(roll.isSpare()).toBe(true);
 });

describe('frame', function() {
 it('maximum frame is 10', function() {
   expect(roll.getCurrentFrame()).toEqual(10);
 });

});
});
