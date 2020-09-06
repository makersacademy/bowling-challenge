'use strict';

describe('Scorecard', function(){

  var scorecard;
  var frame;
  var finalframe;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it('starts with 1 frame object', function() {
    expect(scorecard.frames.length).toBe(1);
    expect(scorecard.frames[0]).toBeInstanceOf(Frame);
  });

});
