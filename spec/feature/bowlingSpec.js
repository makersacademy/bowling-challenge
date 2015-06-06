describe('Bowling', function(){
var scorecard;

beforeEach(function(){
  scorecard = new Scorecard();
});

it('record total score for gutter game', function(){
  for(var i = 0; i < 10; i++) {
    var frame = new Frame;
    scorecard.addFrame(frame);
    frame.bowl(0);
    frame.bowl(0);
    expect(scorecard.totalScore()).toEqual(0);
  }
});

it('record total score for perfect game', function(){
  for(var i = 0; i < 10; i++) {
    var frame = new Frame;
    scorecard.addFrame(frame);
    frame.bowl(10);
    expect(scorecard.totalScore()).toEqual(300);
  }
});

});