'use strict';

describe('Score', function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  it('starts at frame 0', function() {
    expect(game.getCurrentFrameNumber()).toEqual(0);
  });
});
