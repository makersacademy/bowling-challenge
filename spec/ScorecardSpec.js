'use strict';

describe ("Scorecard", function() {

let scorecard;

beforeEach(function(){
  scorecard = new Scorecard();
})

it ("should return the values of the first frames", function () {
  scorecard.roll([0,0]);
  expect(scorecard.getCurrentScore()).toEqual(0)
})

it ("should return the values of the first two frames", function () {
  scorecard.roll([0,0]);
  scorecard.roll([1,2]);
  expect(scorecard.getCurrentScore()).toEqual(3)
})
it ("should test for spares", function () {
  scorecard.roll([7,3]);
  scorecard.roll([1,4]);
  expect(scorecard.getCurrentScore()).toEqual(16)
})

it ('should count a strike', function (){
  scorecard.roll("X");
  scorecard.roll([1,4]);
  expect(scorecard.getCurrentScore()).toEqual(20)
  // 10 + 1 + 4 + 1 + 4
})

it ('should count the value of two strikes', function (){
  scorecard.roll([2,3]);
  scorecard.roll("X");
  scorecard.roll("X");
  scorecard.roll([1,0]);
  expect(scorecard.getCurrentScore()).toEqual(38)
  // (2 + 3) + ( 10 + 10 + 1) + (10 + 1 + 0) + (1 + 0)
})

it ('should count the value of three strikes', function(){
  scorecard.roll("X");
  scorecard.roll("X");
  scorecard.roll("X");
  scorecard.roll([1,5]);

  expect(scorecard.getCurrentScore()).toEqual(73)
})
// (10 + 10 + 10) + ( 10 + 10 + 1) + (10 + 1 + 5) + (1 + 5)

});

