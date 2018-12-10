describe('Mock game - no bonus streaks, 2 bowls in frame 10', function(){
  //Play full game of bolwing
  bowlingCard = new BowlingScorecard();
  bowlingCard.enterBowl(10);
  bowlingCard.enterBowl(2);
  bowlingCard.enterBowl(5);
  bowlingCard.enterBowl(5);
  bowlingCard.enterBowl(5);
  bowlingCard.enterBowl(6);
  bowlingCard.enterBowl(2);
  bowlingCard.enterBowl(10);
  bowlingCard.enterBowl(3);
  bowlingCard.enterBowl(5);
  bowlingCard.enterBowl(5);
  bowlingCard.enterBowl(5);
  bowlingCard.enterBowl(5);
  bowlingCard.enterBowl(2);
  bowlingCard.enterBowl(3);
  bowlingCard.enterBowl(6);
  bowlingCard.enterBowl(2);
  bowlingCard.enterBowl(5);

  it('frame1', function(){
    expect(bowlingCard.scores.frame1['bowl1']).toEqual(10);
    expect(bowlingCard.scores.frame1['bowl2']).not.toBeDefined();
    expect(bowlingCard.scores.frame1['bonus']).toEqual('strike');
    expect(bowlingCard.scores.frame1['frameScore']).toEqual(17);
    // expect(bowlingCard.scores.frame1['totalScore']).toEqual(17);
  });
  it('frame2', function(){
    expect(bowlingCard.scores.frame2['bowl1']).toEqual(2);
    expect(bowlingCard.scores.frame2['bowl2']).toEqual(5);
    expect(bowlingCard.scores.frame2['bonus']).not.toBeDefined();
    expect(bowlingCard.scores.frame2['frameScore']).toEqual(7);
    // expect(bowlingCard.scores.frame2['totalScore']).toEqual(24);
  });
  it('frame3', function(){
    expect(bowlingCard.scores.frame3['bowl1']).toEqual(5);
    expect(bowlingCard.scores.frame3['bowl2']).toEqual(5);
    expect(bowlingCard.scores.frame3['bonus']).toEqual('spare');
    expect(bowlingCard.scores.frame3['frameScore']).toEqual(16);
    // expect(bowlingCard.scores.frame3['totalScore']).toEqual(40);
  });
  it('frame4', function(){
    expect(bowlingCard.scores.frame4['bowl1']).toEqual(6);
    expect(bowlingCard.scores.frame4['bowl2']).toEqual(2);
    expect(bowlingCard.scores.frame4['bonus']).not.toBeDefined();
    expect(bowlingCard.scores.frame4['frameScore']).toEqual(8);
    // expect(bowlingCard.scores.frame4['totalScore']).toEqual(48);
  });
  it('frame5', function(){
    expect(bowlingCard.scores.frame5['bowl1']).toEqual(10);
    expect(bowlingCard.scores.frame5['bowl2']).not.toBeDefined();
    expect(bowlingCard.scores.frame5['bonus']).toEqual('strike');
    expect(bowlingCard.scores.frame5['frameScore']).toEqual(18);
    // expect(bowlingCard.scores.frame5['totalScore']).toEqual(66);
  });
  it('frame6', function(){
    expect(bowlingCard.scores.frame6['bowl1']).toEqual(3);
    expect(bowlingCard.scores.frame6['bowl2']).toEqual(5);
    expect(bowlingCard.scores.frame6['bonus']).not.toBeDefined();
    expect(bowlingCard.scores.frame6['frameScore']).toEqual(8);
    // expect(bowlingCard.scores.frame6['totalScore']).toEqual(74);
  });
  it('frame7', function(){
    expect(bowlingCard.scores.frame7['bowl1']).toEqual(5);
    expect(bowlingCard.scores.frame7['bowl2']).toEqual(5);
    expect(bowlingCard.scores.frame7['bonus']).toEqual('spare');
    expect(bowlingCard.scores.frame7['frameScore']).toEqual(15);
    // expect(bowlingCard.scores.frame7['totalScore']).toEqual(89);
  });
  it('frame8', function(){
    expect(bowlingCard.scores.frame8['bowl1']).toEqual(5);
    expect(bowlingCard.scores.frame8['bowl2']).toEqual(2);
    expect(bowlingCard.scores.frame8['bonus']).not.toBeDefined();
    expect(bowlingCard.scores.frame8['frameScore']).toEqual(7);
    // expect(bowlingCard.scores.frame8['totalScore']).toEqual(96);
  });
  it('frame9', function(){
    expect(bowlingCard.scores.frame9['bowl1']).toEqual(3);
    expect(bowlingCard.scores.frame9['bowl2']).toEqual(6);
    expect(bowlingCard.scores.frame9['bonus']).not.toBeDefined();
    expect(bowlingCard.scores.frame9['frameScore']).toEqual(9);
    // expect(bowlingCard.scores.frame9['totalScore']).toEqual(105);
  });
  it('frame10', function(){
    expect(bowlingCard.scores.frame10['bowl1']).toEqual(2);
    expect(bowlingCard.scores.frame10['bowl2']).toEqual(5);
    expect(bowlingCard.scores.frame10['bonus']).not.toBeDefined();
    expect(bowlingCard.scores.frame10['frameScore']).toEqual(7);
    // expect(bowlingCard.scores.frame10['totalScore']).toEqual(112);
  });
});
