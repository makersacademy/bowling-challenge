'use strict';

describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  it('tracks frames', function() {
    score.bowl(5);
    expect(score.frame.current).toEqual([5]);
  });

  it('confirms when a frame is ongoing', function() {
    expect(score.bowl(1)).toEqual('Frame ongoing');
  });
});
