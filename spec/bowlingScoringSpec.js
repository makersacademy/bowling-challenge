describe('Scorecard - Calculating the scores before the 10th frame', function (){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('checks if the frame was a strike and if so sets #lastFrameStrike to true so that the score can be adjusted on the next turn', function(){
    scorecard.ballOne(10);
    expect(scorecard.lastFrameStrike).toBe(true);
    expect(scorecard.strike).toBe(false);
  });

  it('checks if the frame was a spare and if so sets #lastFrameSpare to true so that the score can be adjusted on the next turn', function(){
    scorecard.ballTwo(6, 4);
    expect(scorecard.lastFrameSpare).toBe(true);
    expect(scorecard.spare).toBe(false);
  });

  it('adds the total of ball one and ball 2 to the score', function(){
    scorecard.ballTwo(2, 5);
    expect(scorecard.score).toEqual(7);
  });

  it('pushes ball one and ball 2 to the #bowlingFrames array', function(){
    scorecard.ballTwo(2, 5);
    expect(scorecard.bowlingFrames.length).toEqual(1);
    expect(scorecard.bowlingFrames[0]).toEqual([2, 5])
  });

  it('checks if the last frame was a strike and if so adds the total of the first and second ball to the score', function(){
    scorecard.ballOne(10);
    scorecard.ballTwo(2,3);
    expect(scorecard.score).toEqual(20);
    expect(scorecard.lastFrameStrike).toBe(false);
  });

  it('checks if the last frame was a spare and if so adds the total of the first ball to the score', function(){
    scorecard.ballTwo(5,5);
    scorecard.ballTwo(2,3);
    expect(scorecard.score).toEqual(17);
    expect(scorecard.lastFrameSpare).toBe(false);
  });

});
