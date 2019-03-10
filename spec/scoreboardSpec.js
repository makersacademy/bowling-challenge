'use strict';

describe('Bowling scorecard:', function () {
  var scores

beforeEach(function() {
  scores = new scoreCard();
});

it('score1 array 0 stores a value', function() {
  scores.bowl1(2)
  console.log(scores.score1)
  expect(scores.score1).toContain(2);
});
it('score1 array 0 stores a strike', function() {
  scores.bowl1('strike')
  console.log(scores.score1)
  expect(scores.score1).toContain('X');
});

it('score2 array 0 stores a value', function() {
  scores.bowl1(3)
  console.log(scores.score1)
  expect(scores.score1).toContain(3);
});

it('score1 array 0 stores a spare', function() {
  scores.bowl1(7)
  scores.bowl1(3)
  console.log(scores.score1)
  expect(scores.score1).toContain('/');
});

it('score1 array 1 stores a value', function() {
  scores.bowl1(2)
  scores.bowl1(3)
  scores.bowl1(5)
  console.log(scores.score1)
  expect(scores.score1).toContain(5);
});

it('score1 array 1 stores a value after strike', function() {
  console.log('+++')
  scores.bowl1('strike')
  scores.bowl1(8)
  console.log(scores.score1)
  expect(scores.score1).toContain(8);
});

it('stores X noting 10 as a strike', function() {
  scores.bowl1(10)
  expect(scores.score1).toContain('X')
});

it('checking if spare works', function(){
  scores.bowl1(5)
  scores.bowl1(5)
  scores.bowl1(7)
  scores.bowl1(3)
  expect(scores.score1[3]).toContain('/')
});

it('produces a score', function() {
  console.log('---')
  scores.bowl1(5)
  scores.bowl1(2)
  scores.bowl1(5)
  scores.bowl1(2)
  scores.results()
  // console.log(scores.results())
  // console.log(scores.score1)
  // console.log(scores.result)
  // console.log(typeof NaN)
  expect(scores.result).toEqual(14)
});


});
