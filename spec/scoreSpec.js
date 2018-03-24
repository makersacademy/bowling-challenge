'use strict';

describe('Score', function(){
  var score;
  var frame;


  beforeEach(function(){
    score = new Score;
    frame = new Frame;
    frame.play1(2);
    frame.play2(4);
  });

  it('returns a current score after completed frame', function(){
    expect(score.totalScore(frame)).toEqual(6);
  });
});
