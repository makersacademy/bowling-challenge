describe('Bowling scorecard', function(){
var scorecard;

beforeEach(function(){
  scorecard = new Scorecard();
});

it('can record total score for gutter game', function(){
  for(var i = 0; i < 10; i++) {
    var frame = new Frame;
    scorecard.addFrame(frame);
    frame.bowl(0);
    frame.bowl(0);
  }
  expect(scorecard.totalScore()).toEqual(0);
});

it('can record total score for a game without a bonus', function(){
  for(var i = 0; i < 10; i++) {
    var frame = new Frame;
    scorecard.addFrame(frame);
    frame.bowl(1);
    frame.bowl(2);
  }
  expect(scorecard.totalScore()).toEqual(30);
});

it('can record total score of a game with strikes but without a bonus for last frame', function(){
  for(var i = 0; i < 9; i++) {
    var frame = new Frame;
    scorecard.addFrame(frame);
    frame.bowl(10);
  }
  var frame = new Frame;
  scorecard.addFrame(frame);
  frame.bowl(2);
  frame.bowl(3);
  expect(scorecard.totalScore()).toEqual(252);
});

it('can record total score of a game with spares but without a bonus for last frame', function(){
  for(var i = 0; i < 9; i++) {
    var frame = new Frame;
    scorecard.addFrame(frame);
    frame.bowl(0);
    frame.bowl(10);
  }
  var frame = new Frame;
  scorecard.addFrame(frame);
  frame.bowl(2);
  frame.bowl(3);
  expect(scorecard.totalScore()).toEqual(97);
});

it('can record total score for perfect game', function(){
  for(var i = 0; i < 10; i++) {
    var frame = new Frame;
    scorecard.addFrame(frame);
    frame.bowl(10);
  }
  expect(scorecard.totalScore()).toEqual(300);
});

});