'use strict'

describe('Bowling', function() {
  let bowl;

  beforeEach(function() {
    bowl = new Bowling();
  });

  it('starts with an empty array', function() {
    expect(bowl.score).toEqual([]);
  });

  it('adds to the array', function() {
    bowl.scoring(4);
    expect(bowl.score.length).toEqual(1);
  });

  it('sums the first 2 elements of the array', function() {
    bowl.scoring(4);
    bowl.scoring(4);
    expect(bowl.frame1()).toEqual(8);
  });
});
