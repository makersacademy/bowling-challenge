'use strict';

describe('scorecard', function(){
  var scorecard;
  var frame;
  var strike;
  var spare;

  class FakeFrame{

  };

  beforeEach(function(){
    scorecard = new Scorecard(FakeFrame);
  });

  it('has a frame object as the current frame', function(){
    expect(scorecard.currentFrame).toBeInstanceOf(FakeFrame)
  });



})
