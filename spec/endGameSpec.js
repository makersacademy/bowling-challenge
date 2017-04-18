describe('Scorecard - Ending the game and bonus ball', function (){

  var scorecard;
  var _GAME_OVER = "You are all out of balls"

  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('allows a bonus ball when the 19th ball is a strike', function(){
    for (var i = 1; i <= 18; i++) {
       scorecard.ball(3);
    }
    scorecard.ball(10)
    expect(scorecard.extraBall).toBe(true);
  });

  it('allows a second bonus ball when the 19th and 20th balls are strikes', function(){
    for (var i = 1; i <= 18; i++) {
       scorecard.ball(3);
    }
    scorecard.ball(10)
    scorecard.ball(10)
    expect(scorecard.extraBall).toBe(true);
    expect(scorecard.gameOver).toBe(false);
  });

  it('does not allow more than 21 balls to be entered', function(){
    for (var i = 1; i <= 18; i++) {
       scorecard.ball(3);
    }
    scorecard.ball(10)
    scorecard.ball(10)
    scorecard.ball(10)
    expect( function() {scorecard.ball(-1);} ).toThrow(new Error(_GAME_OVER));
  });


  it('allows a bonus ball when the 20th ball is a spare', function(){
    for (var i = 1; i <= 19; i++) {
       scorecard.ball(3);
    }
    scorecard.ball(7)
    expect(scorecard.extraBall).toBe(true);
  });

  it('calls game over when the 19th ball is not a strike and the 20th is not a spare', function(){
    for (var i = 1; i <= 20; i++) {
       scorecard.ball(3);
    }
    expect(scorecard.gameOver).toBe(true);
    expect(scorecard.extraBall).toBe(false);
  });

  it('should give a bonus of 20 points if the person finishes the game with no points', function(){
    for (var i = 1; i <= 20; i++) {
       scorecard.ball(0);
    }
    expect(scorecard.score).toEqual(20);
  });

});
