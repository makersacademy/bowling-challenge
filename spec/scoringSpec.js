describe('Scorecard - Calculating the scores', function (){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('adds the number of pins rolled to the score for each ball as long as the entry is valid', function(){
    scorecard.ball(4)
    expect(scorecard.score).toEqual(4);
  });

  it('if a ball is a strike it adds a bonus total equivalent to the next two balls to the score', function(){
    scorecard.ball(10);
    scorecard.ball(5);
    scorecard.ball(4);
    expect(scorecard.score).toEqual(28);
  });

  it('if a ball is a spare it adds a bonus equivalent to the next ball to the score', function(){
    scorecard.ball(5);
    scorecard.ball(5);
    scorecard.ball(4);
    scorecard.ball(4);
    expect(scorecard.score).toEqual(22);
  });


});
