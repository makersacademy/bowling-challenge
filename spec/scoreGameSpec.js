'use strict';
describe('ScoreGame:', function(){
  var scoreGame;
  var scoreGame = new ScoreGame();
  it('A score should be added when he/she throws a ball.', function(){
    scoreGame.getScore();
    expect(scoreGame.frame[0]).toBeGreaterThan(0);
    expect(scoreGame.frame[0]).toBeLessThan(11);
  });
  // it('Score should be added to the frame', function(){
  //   var score = scoreGame.getScore();
  //   expect(this.scoreGame.frame[0]).toEqual();
  // });


});
