describe('Mock game - pefect game', function(){
  //Play full game of bolwing
  perfectCard = new BowlingScorecard();
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);
  perfectCard.enterBowl(10);

  it('frame1', function(){
    expect(perfectCard.scores.frame1['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame1['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame1['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame1['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame1['totalScore']).toEqual(17);
  });
  it('frame2', function(){
    expect(perfectCard.scores.frame2['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame2['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame2['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame2['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame2['totalScore']).toEqual(24);
  });
  it('frame3', function(){
    expect(perfectCard.scores.frame3['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame3['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame3['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame3['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame3['totalScore']).toEqual(40);
  });
  it('frame4', function(){
    expect(perfectCard.scores.frame4['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame4['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame4['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame4['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame4['totalScore']).toEqual(48);
  });
  it('frame5', function(){
    expect(perfectCard.scores.frame5['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame5['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame5['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame5['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame5['totalScore']).toEqual(66);
  });
  it('frame6', function(){
    expect(perfectCard.scores.frame6['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame6['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame6['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame6['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame6['totalScore']).toEqual(74);
  });
  it('frame7', function(){
    expect(perfectCard.scores.frame7['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame7['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame7['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame7['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame7['totalScore']).toEqual(89);
  });
  it('frame8', function(){
    expect(perfectCard.scores.frame8['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame8['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame8['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame8['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame8['totalScore']).toEqual(96);
  });
  it('frame9', function(){
    expect(perfectCard.scores.frame9['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame9['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame9['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame9['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame9['totalScore']).toEqual(105);
  });
  it('frame10', function(){
    expect(perfectCard.scores.frame10['bowl1']).toEqual(10);
    expect(perfectCard.scores.frame10['bowl2']).not.toBeDefined();
    expect(perfectCard.scores.frame10['bonus']).toEqual('strike');
    expect(perfectCard.scores.frame10['frameScore']).toEqual(30);
    // expect(perfectCard.scores.frame10['totalScore']).toEqual(112);
  });
});
