describe('Scorecard', function(){
  var scorecard;

  beforeEach( function(){
    scorecard = new Scorecard();
  });

  it('has a total score when initialized', function(){
    expect(scorecard.totalScore).toEqual(0);
  });


  it('has an array of individual scores when initialized', function() {
    expect(scorecard.rolls).toEqual([]);
  });

  it('can store individual rolls in an array', function (){
    scorecard.oneFrame(2,3);
    expect(scorecard.rolls).toEqual([[2,3]]);
  });

  it('can track all 10 frames of 20 rolls with no spares or half strikes', function(){
      for (var i = 0; i < 10; i++){
        scorecard.oneFrame(2,3);
      }
      expect(scorecard.totalScore).toEqual(50);
  });

  it('can calculate the score of a game with no spares or half strikes', function(){
      for (var i = 0; i < 10; i++){
        scorecard.oneFrame(2,3);
      }
      expect(scorecard.rolls).toEqual([[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3]])
  });

});