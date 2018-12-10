describe('Mock game - spare game, spares in every frame', function(){
  //Play full game of bolwing
  sparesCard = new BowlingScorecard();
  sparesCard.enterBowl(8);
  sparesCard.enterBowl(2); //
  sparesCard.enterBowl(5);
  sparesCard.enterBowl(5); //
  sparesCard.enterBowl(4);
  sparesCard.enterBowl(6); //
  sparesCard.enterBowl(2);
  sparesCard.enterBowl(8); //
  sparesCard.enterBowl(3);
  sparesCard.enterBowl(7); //
  sparesCard.enterBowl(5);
  sparesCard.enterBowl(5); //
  sparesCard.enterBowl(9);
  sparesCard.enterBowl(1); //
  sparesCard.enterBowl(3);
  sparesCard.enterBowl(7); //
  sparesCard.enterBowl(2);
  sparesCard.enterBowl(8); //
  sparesCard.enterBowl(7);
  sparesCard.enterBowl(3);
  sparesCard.enterBowl(8); //
  console.log(sparesard.scores);

  it('frame1', function(){
    expect(sparesCard.scores.frame1['bowl1']).toEqual(8);
    expect(sparesCard.scores.frame1['bowl2']).toEqual(2);
    expect(sparesCard.scores.frame1['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame1['frameScore']).toEqual(15);
    // expect(sparesCard.scores.frame1['totalScore']).toEqual(17);
  });
  it('frame2', function(){
    expect(sparesCard.scores.frame2['bowl1']).toEqual(5);
    expect(sparesCard.scores.frame2['bowl2']).toEqual(5);
    expect(sparesCard.scores.frame2['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame2['frameScore']).toEqual(14);
    // expect(sparesCard.scores.frame2['totalScore']).toEqual(24);
  });
  it('frame3', function(){
    expect(sparesCard.scores.frame3['bowl1']).toEqual(4);
    expect(sparesCard.scores.frame3['bowl2']).toEqual(6);
    expect(sparesCard.scores.frame3['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame3['frameScore']).toEqual(12);
    // expect(sparesCard.scores.frame3['totalScore']).toEqual(40);
  });
  it('frame4', function(){
    expect(sparesCard.scores.frame4['bowl1']).toEqual(2);
    expect(sparesCard.scores.frame4['bowl2']).toEqual(8);
    expect(sparesCard.scores.frame4['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame4['frameScore']).toEqual(13);
    // expect(sparesCard.scores.frame4['totalScore']).toEqual(48);
  });
  it('frame5', function(){
    expect(sparesCard.scores.frame5['bowl1']).toEqual(3);
    expect(sparesCard.scores.frame5['bowl2']).toEqual(7);
    expect(sparesCard.scores.frame5['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame5['frameScore']).toEqual(15);
    // expect(sparesCard.scores.frame5['totalScore']).toEqual(66);
  });
  it('frame6', function(){
    expect(sparesCard.scores.frame6['bowl1']).toEqual(5);
    expect(sparesCard.scores.frame6['bowl2']).toEqual(5);
    expect(sparesCard.scores.frame6['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame6['frameScore']).toEqual(19);
    // expect(sparesCard.scores.frame6['totalScore']).toEqual(74);
  });
  it('frame7', function(){
    expect(sparesCard.scores.frame7['bowl1']).toEqual(9);
    expect(sparesCard.scores.frame7['bowl2']).toEqual(1);
    expect(sparesCard.scores.frame7['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame7['frameScore']).toEqual(13);
    // expect(sparesCard.scores.frame7['totalScore']).toEqual(89);
  });
  it('frame8', function(){
    expect(sparesCard.scores.frame8['bowl1']).toEqual(3);
    expect(sparesCard.scores.frame8['bowl2']).toEqual(7);
    expect(sparesCard.scores.frame8['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame8['frameScore']).toEqual(12);
    // expect(sparesCard.scores.frame8['totalScore']).toEqual(96);
  });
  it('frame9', function(){
    expect(sparesCard.scores.frame9['bowl1']).toEqual(2);
    expect(sparesCard.scores.frame9['bowl2']).toEqual(8);
    expect(sparesCard.scores.frame9['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame9['frameScore']).toEqual(17);
    // expect(sparesCard.scores.frame9['totalScore']).toEqual(105);
  });
  it('frame10', function(){
    expect(sparesCard.scores.frame10['bowl1']).toEqual(7);
    expect(sparesCard.scores.frame10['bowl2']).toEqual(3);
    expect(sparesCard.scores.frame10['bowl3']).toEqual(8);
    expect(sparesCard.scores.frame10['bonus']).toEqual('spare');
    expect(sparesCard.scores.frame10['frameScore']).toEqual(18);
    // expect(sparesCard.scores.frame10['totalScore']).toEqual(112);
  });
});
