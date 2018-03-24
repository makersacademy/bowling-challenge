'use strict';

describe('Score', function(){
  var score;
  var frame1;
  var frame2;
  var frame3;


  beforeEach(function(){
    score = new Score;
    frame1 = new Frame;
    frame2 = new Frame;
    frame3 = new Frame;
    frame1.play1(2);
    frame1.play2(4);
  });

  it('returns a current score after first completed frame', function(){
    expect(score.totalScore(frame1)).toEqual(6);
  });

  it('returns a current score after second complete frame', function() {
    score.totalScore(frame1);
    frame2.play1(5);
    frame2.play2(3);
    expect(score.totalScore(frame2)).toEqual(14);
  })

  it('knows if there is a spares bonus', function(){
    score.totalScore(frame1);
    frame2.play1(5);
    frame2.play2(5);
    frame2.bonusAward();
    score.giveBonus(frame2);
    expect(score.previousBonus).toEqual('spares');
  });

  it('knows if there is a strike bonus', function(){
    score.totalScore(frame1);
    frame2.play1(10);
    frame2.bonusAward();
    score.giveBonus(frame2);
    expect(score.previousBonus).toEqual('strike');
  });

  it('awards a strike bonus', function() {
    score.totalScore(frame1);
    frame2.play1(10);
    frame2.bonusAward();
    score.totalScore(frame2)
    frame3.play1(1);
    frame3.play2(2);
    score.giveBonus(frame2)
    expect(score.totalScore(frame3)).toEqual(22)
  });
  it('awards a spares bonus', function() {
    score.totalScore(frame1);
    frame2.play1(5);
    frame2.play2(5);
    frame2.bonusAward();
    score.totalScore(frame2)
    frame3.play1(1);
    frame3.play2(2);
    score.giveBonus(frame2)
    expect(score.totalScore(frame3)).toEqual(20)
  });
  it('awards no bonus', function() {
    score.totalScore(frame1);
    frame2.play1(5);
    frame2.play2(4);
    frame2.bonusAward();
    score.totalScore(frame2)
    frame3.play1(1);
    frame3.play2(2);
    score.giveBonus(frame2)
    expect(score.totalScore(frame3)).toEqual(18)
  })

});
