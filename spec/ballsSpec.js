describe('Scorecard - Inputs from balls', function (){

  var scorecard;
  var _SCORE_ERROR = "I think you might want to check those figures again..."
  var _GAME_OVER = "You are all out of balls"
  var _STRIKE = 10


  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('does not allow a score of higher than 10 or less than 0 to be entered for any ball', function(){
    expect( function() {scorecard.ball(11);} ).toThrow(new Error(_SCORE_ERROR));
    expect( function() {scorecard.ball(-1);} ).toThrow(new Error(_SCORE_ERROR));
  });

  it('checks if the game is over before processing a new ball', function(){
    scorecard.gameOver = true;
    expect( function() {scorecard.ball(8);} ).toThrow(new Error(_GAME_OVER));
  });

  it('correctly assesses if a ball is a strike', function(){
    scorecard.ball(10);
    expect(scorecard.addNextBall).toBe(true);
  });

  it('correctly assesses if the first ball is not a strike', function(){
    scorecard.ball(6);
    expect(scorecard.addNextBall).toBe(false);
  });

  it('does not allow a score of higher than 10 for the second ball when added to the first ball', function(){
    scorecard.ball(6)
    expect( function() {scorecard.ball(5);} ).toThrow(new Error(_SCORE_ERROR));
  });

  it('correctly assesses if the player has bowled a spare', function(){
    scorecard.ball(6);
    scorecard.ball(4);
    expect(scorecard.addNextBall).toBe(true);
  });

  it('correctly assesses if the player has not bowled a spare', function(){
    scorecard.ball(6);
    scorecard.ball(3);
    expect(scorecard.addNextBall).toBe(false);
  });

  it('pushes the value of each ball to the array of frames', function(){
    scorecard.ball(6);
    scorecard.ball(3);
    expect(scorecard.frameList).toEqual([6,3]);
  });


});
