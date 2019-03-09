'use strict';

describe('Bowling scorecard:', function () {
  var scores

beforeEach(function() {
  scores = new scoreCard();
});

it('score1 array 0 stores a value', function() {
  scores.bowl1(2)
  console.log(scores.score1[0])
  expect(scores.score1[0]).toContain(2);
});
it('score1 array 0 stores a strike', function() {
  scores.bowl1('strike')
  console.log(scores.score1[0])
  expect(scores.score1[0]).toContain('X');
});

it('score2 array 0 stores a value', function() {
  scores.bowl2(3)
  console.log(scores.score2[0])
  expect(scores.score2[0]).toContain(3);
});

it('score2 array 0 stores a spare', function() {
  scores.bowl1(7)
  scores.bowl2(3)
  console.log(scores.score2[0])
  expect(scores.score2[0]).toContain('/');
});

it('score1 array 1 stores a value', function() {
  scores.bowl1(2)
  scores.bowl2(3)
  scores.bowl1(5)
  console.log(scores.score1[0])
  console.log(scores.score1[1])
  expect(scores.score1[1]).toContain(5);
});

it('score1 array 1 stores a value after strike', function() {
  scores.bowl1('strike')
  scores.bowl2(3)
  scores.bowl1(8)
  console.log(scores.score1)
  console.log(scores.bowl2(3))
  console.log(scores.score1[1])
  expect(scores.score1[1]).toContain(8);
});

it('produces a score', function() {
  scores.bowl1(5)
  scores.bowl2(2)
  scores.bowl1(5)
  scores.bowl2(2)
  scores.results()
  console.log(scores.result)
  expect(scores.result).toEqual(14)

});



});
