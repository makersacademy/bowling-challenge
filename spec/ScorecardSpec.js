'use strict';

describe('Scorecard', function() {
  var scorecard;
  beforeEach(function(){
    scorecard = new Scorecard()
  });



describe('gutter game', function(){
  it('gives score 0', function(){
    for (var i = 0; i < 20; i++)
    scorecard.roll( 0);
    expect(scorecard.total()).toEqual(0);
  });
  it('expects game to complete with 20', function(){
    for (var i = 0; i < 20; i++)
    scorecard.roll(0);
    expect(scorecard.isComplete()).toEqual(true);
  });
  it('knows current frame', function(){
    scorecard.frame(3);
    expect(scorecard.frame()).toEqual(3);
  });
 });
});
