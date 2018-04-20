describe('scoreCount', function() {
 var bowling;

beforeEach(function(){
  bowling = new Bowling();
});

it('has a function that returns the current score and it starts with zero', function(){
  expect(bowling.currentScore).toEqual(0);

});

it('starts with zero', function() {
  expect(bowling.totalScore).toEqual(0);

});

it('counts the score of a roll', function() {
  expect(bowling.countScore(3)).toEqual(3);

});

it('has a function that counts the frame, starting at 0', function() {
  expect(bowling.frameCount).toEqual(1);
});





});
