describe('Scorecard - Ending the game and bonus ball', function (){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('should keep track of the number of frames in the #frameCount variable', function(){
    scorecard.ballTwo(5,5)
    scorecard.ballTwo(2,3)
    expect(scorecard.frameCount).toEqual(2);
  });

  it('should check if the number of frames is equal to 10 with lastFrameStrike and lastFrameSpare both false, if so it should turn scoreIsFinal to true', function(){
    for (var i = 1; i <= 10; i++) {
       scorecard.ballTwo(2,3);
    }
    expect(scorecard.scoreIsFinal).toBe(true);
  });

  it('on the 10th frame it should check if the last frame was a strike, if so it should allow another #ballOne', function(){
    for (var i = 1; i <= 9; i++) {
       scorecard.ballTwo(2,3);
    }
    scorecard.ballOne(10,0);
    expect(scorecard.scoreIsFinal).toBe(false);
  });

  it('on the 10th frame it should check if the last frame was a spare, if so it should allow another #ballOne', function(){
    for (var i = 1; i <= 9; i++) {
       scorecard.ballTwo(2,3);
    }
    scorecard.ballTwo(9,1);
    expect(scorecard.scoreIsFinal).toBe(false);
  });

  it('should give a bonus of 20 points if the person finishes the game with no points', function(){
    for (var i = 1; i <= 10; i++) {
       scorecard.ballTwo(0,0);
    }
    expect(scorecard.score).toEqual(20);
  });

});
