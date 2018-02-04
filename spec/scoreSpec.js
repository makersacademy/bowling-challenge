'use strict';

describe('Score', function() {

  var score;

  beforeEach(function() {
    score = new Score();
  });

  it('score starts at zero', function() {
    expect(score.currentScore).toEqual(0);
  });
});
