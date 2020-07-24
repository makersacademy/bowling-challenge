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

  describe('frame', function() {
    it('gives the basic score', function() {
      bowl.scoring(4);
      bowl.scoring(4);
      expect(bowl.frame()).toEqual(8);
    });

    it('checks and scores for a spare', function() {
      bowl.scoring(4);
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame()).toEqual(14);
    });
  });
});
