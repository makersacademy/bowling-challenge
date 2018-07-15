

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('the frames starts empty', function(){
    expect(scorecard.frameScores).toEqual([]);
  });


  it('allows a user to enter a second roll', function(){
    scorecard.roll(5);
    scorecard.roll(1);
    scorecard.calcFrameScores();
    expect(scorecard.total).toEqual(6);
  });

  it('resets the current frame', function (){
    scorecard.roll(5);
    scorecard.roll(1);
    scorecard.calcFrameScores();
    expect(scorecard.currentFrame).toEqual([]);
  });

  it('calculates a spare', function(){
    scorecard.roll(8);
    scorecard.roll(2);
    scorecard.calcFrameScores();
    scorecard.roll(8);
    scorecard.roll(0);
    scorecard.calcFrameScores();
    expect(scorecard.total).toEqual(26);
    expect(scorecard.frameScores).toEqual([18, 26]);
  });

  it('calculates a strike', function(){
    scorecard.roll(10);
    scorecard.calcFrameScores();
    scorecard.roll(4);
    scorecard.roll(2);
    scorecard.calcFrameScores();
    expect(scorecard.total).toEqual(22);
    expect(scorecard.frameScores).toEqual([16, 22]);
  });

  it('calculates a gutter game', function(){
    for(var i = 0; i < 20; i++){
      scorecard.roll(0);
      scorecard.calcFrameScores();
    }
    expect(scorecard.total).toEqual(0);
  });


});
