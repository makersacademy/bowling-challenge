describe('Mock game - spares game', function(){
  //Play full game of bolwing
  sparesCard = new BowlingCard();
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);
  sparesCard.enterScore(5);


  it('frame1', function(){
    expect(sparesCard.scores[0]).toEqual(5);
    expect(sparesCard.scores[1]).toEqual(5);
    expect(sparesCard.frameScores[0]).toEqual(15);
  });
  it('frame2', function(){
    expect(sparesCard.scores[2]).toEqual(5);
    expect(sparesCard.scores[3]).toEqual(5);
    expect(sparesCard.frameScores[1]).toEqual(30);
  });
  it('frame3', function(){
    expect(sparesCard.scores[4]).toEqual(5);
    expect(sparesCard.scores[5]).toEqual(5);
    expect(sparesCard.frameScores[2]).toEqual(45);
  });
  it('frame4', function(){
    expect(sparesCard.scores[6]).toEqual(5);
    expect(sparesCard.scores[7]).toEqual(5);
    expect(sparesCard.frameScores[3]).toEqual(60);
  });
  it('frame5', function(){
    expect(sparesCard.scores[8]).toEqual(5);
    expect(sparesCard.scores[9]).toEqual(5);
    expect(sparesCard.frameScores[4]).toEqual(75);
  });
  it('frame6', function(){
    expect(sparesCard.scores[10]).toEqual(5);
    expect(sparesCard.scores[11]).toEqual(5);
    expect(sparesCard.frameScores[5]).toEqual(90);
  });
  it('frame7', function(){
    expect(sparesCard.scores[12]).toEqual(5);
    expect(sparesCard.scores[13]).toEqual(5);
    expect(sparesCard.frameScores[6]).toEqual(105);
  });
  it('frame8', function(){
    expect(sparesCard.scores[14]).toEqual(5);
    expect(sparesCard.scores[15]).toEqual(5);
    expect(sparesCard.frameScores[7]).toEqual(120);
  });
  it('frame9', function(){
    expect(sparesCard.scores[16]).toEqual(5);
    expect(sparesCard.scores[17]).toEqual(5);
    expect(sparesCard.frameScores[8]).toEqual(135);
  });
  it('frame5', function(){
    expect(sparesCard.scores[18]).toEqual(5);
    expect(sparesCard.scores[19]).toEqual(5);
    expect(sparesCard.scores[20]).toEqual(5);
    expect(sparesCard.frameScores[9]).toEqual(150);
  });
});
