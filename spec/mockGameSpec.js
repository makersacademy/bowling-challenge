describe('Mock game - no bonus streaks, 2 bowls in frame 10', function(){
  //Play full game of bolwing
  bowlingCard = new BowlingCard();
  bowlingCard.enterScore(10);
  bowlingCard.enterScore(2);
  bowlingCard.enterScore(5);
  bowlingCard.enterScore(5);
  bowlingCard.enterScore(5);
  bowlingCard.enterScore(6);
  bowlingCard.enterScore(2);
  bowlingCard.enterScore(10);
  bowlingCard.enterScore(3);
  bowlingCard.enterScore(5);
  bowlingCard.enterScore(5);
  bowlingCard.enterScore(5);
  bowlingCard.enterScore(5);
  bowlingCard.enterScore(2);
  bowlingCard.enterScore(3);
  bowlingCard.enterScore(6);
  bowlingCard.enterScore(2);
  bowlingCard.enterScore(5);

  it('frame1', function(){
    expect(bowlingCard.scores[0]).toEqual(10);
    expect(bowlingCard.scores[1]).toEqual(0);
    expect(bowlingCard.frameScores[0]).toEqual(17);
  });
  it('frame2', function(){
    expect(bowlingCard.scores[2]).toEqual(2);
    expect(bowlingCard.scores[3]).toEqual(5);
    expect(bowlingCard.frameScores[1]).toEqual(24);
    });
  it('frame3', function(){
    expect(bowlingCard.scores[4]).toEqual(5);
    expect(bowlingCard.scores[5]).toEqual(5);
    expect(bowlingCard.frameScores[2]).toEqual(40);
  });
  it('frame4', function(){
    expect(bowlingCard.scores[6]).toEqual(6);
    expect(bowlingCard.scores[7]).toEqual(2);
    expect(bowlingCard.frameScores[3]).toEqual(48);
  });
  it('frame5', function(){
    expect(bowlingCard.scores[8]).toEqual(10);
    expect(bowlingCard.scores[9]).toEqual(0);
    expect(bowlingCard.frameScores[4]).toEqual(66);
  });
  it('frame6', function(){
    expect(bowlingCard.scores[10]).toEqual(3);
    expect(bowlingCard.scores[11]).toEqual(5);
    expect(bowlingCard.frameScores[5]).toEqual(74);
  });
  it('frame7', function(){
    expect(bowlingCard.scores[12]).toEqual(5);
    expect(bowlingCard.scores[13]).toEqual(5);
    expect(bowlingCard.frameScores[6]).toEqual(89);
  });
  it('frame8', function(){
    expect(bowlingCard.scores[14]).toEqual(5);
    expect(bowlingCard.scores[15]).toEqual(2);
    expect(bowlingCard.frameScores[7]).toEqual(96);
  });
  it('frame9', function(){
    expect(bowlingCard.scores[16]).toEqual(3);
    expect(bowlingCard.scores[17]).toEqual(6);
    expect(bowlingCard.frameScores[8]).toEqual(105);
  });
  it('frame10', function(){
    expect(bowlingCard.scores[18]).toEqual(2);
    expect(bowlingCard.scores[19]).toEqual(5);
    expect(bowlingCard.frameScores[9]).toEqual(112);
  });
});
