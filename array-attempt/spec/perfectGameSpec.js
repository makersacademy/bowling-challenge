describe('Mock game - perfect game', function(){
  //Play full game of bolwing
  perfectCard = new BowlingCard();
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);
  perfectCard.enterScore(10);

  it('frame1', function(){
    expect(perfectCard.scores[0]).toEqual(10);
    expect(perfectCard.scores[1]).toEqual(0);
    expect(perfectCard.frameScores[0]).toEqual(30);
  });
  it('frame2', function(){
    expect(perfectCard.scores[2]).toEqual(10);
    expect(perfectCard.scores[3]).toEqual(0);
    expect(perfectCard.frameScores[1]).toEqual(60);
  });
  it('frame3', function(){
    expect(perfectCard.scores[4]).toEqual(10);
    expect(perfectCard.scores[5]).toEqual(0);
    expect(perfectCard.frameScores[2]).toEqual(90);
  });
  it('frame4', function(){
    expect(perfectCard.scores[6]).toEqual(10);
    expect(perfectCard.scores[7]).toEqual(0);
    expect(perfectCard.frameScores[3]).toEqual(120);
  });
  it('frame5', function(){
    expect(perfectCard.scores[8]).toEqual(10);
    expect(perfectCard.scores[9]).toEqual(0);
    expect(perfectCard.frameScores[4]).toEqual(150);
  });
  it('frame6', function(){
    expect(perfectCard.scores[10]).toEqual(10);
    expect(perfectCard.scores[11]).toEqual(0);
    expect(perfectCard.frameScores[5]).toEqual(180);
  });
  it('frame7', function(){
    expect(perfectCard.scores[12]).toEqual(10);
    expect(perfectCard.scores[13]).toEqual(0);
    expect(perfectCard.frameScores[6]).toEqual(210);
  });
  it('frame8', function(){
    expect(perfectCard.scores[14]).toEqual(10);
    expect(perfectCard.scores[15]).toEqual(0);
    expect(perfectCard.frameScores[7]).toEqual(240);
  });
  it('frame9', function(){
    expect(perfectCard.scores[16]).toEqual(10);
    expect(perfectCard.scores[17]).toEqual(0);
    expect(perfectCard.frameScores[8]).toEqual(270);
  });
  it('frame10', function(){
    expect(perfectCard.scores[18]).toEqual(10);
    expect(perfectCard.scores[19]).toEqual(10);
    expect(perfectCard.scores[20]).toEqual(10);
    expect(perfectCard.frameScores[9]).toEqual(300);
  });
});
