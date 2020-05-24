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

  it('gives the score for frame 1', function() {
    bowl.scoring(4);
    bowl.scoring(4);
    expect(bowl.frame1()).toEqual(8);
  });

  it('gives the score for frame 2', function() {
    for (let i = 0; i < 4; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame2()).toEqual(8);
  });

  it('gives the score for frame 3', function() {
    for (let i = 0; i < 6; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame3()).toEqual(8);
  });

  it('gives the score for frame 4', function() {
    for (let i = 0; i < 8; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame4()).toEqual(8);
  });

  it('gives the score for frame 5', function() {
    for (let i = 0; i < 10; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame5()).toEqual(8);
  });

  it('gives the score for frame 6', function() {
    for (let i = 0; i < 12; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame6()).toEqual(8);
  });

  it('gives the score for frame 7', function() {
    for (let i = 0; i < 14; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame7()).toEqual(8);
  });

  it('gives the score for frame 8', function() {
    for (let i = 0; i < 16; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame8()).toEqual(8);
  });

  it('gives the score for frame 9', function() {
    for (let i = 0; i < 18; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame9()).toEqual(8);
  });

  it('gives the score for frame 10', function() {
    for (let i = 0; i < 20; i++) {
      bowl.scoring(4);
    }
    expect(bowl.frame10()).toEqual(8);
  });
});
