'use strict';

describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  it('tracks scores', function() {
    score.bowl(5);
    expect(score.frame.current).toEqual([5]);
  });

  it('tracks frames', function() {
    score.bowl(3);
    score.bowl(4);
    expect(score.card).toEqual([[3, 4]])
  });

  it('tracks multiple frames', function() {
    score.bowl(4);
    score.bowl(2);
    score.bowl(8);
    score.bowl(0);
    expect(score.card).toEqual([[4, 2], [8, 0]]);
  });

  it('tracks total score', function() {
    score.bowl(4);
    score.bowl(5);
    expect(score.total).toEqual(9);
  });
});
