describe('ScoreCard', function () {

  beforeEach(function () {
    scorecard = new ScoreCard();
  });

  it('returns the total score', function () {
    scorecard.addRoll(5);
    scorecard.addRoll(4);
    scorecard.addRoll(10);
    scorecard.addRoll(9);
    scorecard.addRoll(1);
    scorecard.addRoll(3);
    scorecard.addRoll(2);
    expect(scorecard.totalScore()).toEqual(47)
  });


  it('Feature test of entire bowling game', function () {
    /*Frame 1: Roll 1*/
    scorecard.addRoll(1)
    expect(scorecard.totalScore()).toEqual(0)
    /*Frame 1: Roll 2*/
    scorecard.addRoll(4)
    expect(scorecard.totalScore()).toEqual(5)
    /*Frame 2: Roll 1*/
    scorecard.addRoll(4)
    expect(scorecard.totalScore()).toEqual(5)
    /*Frame 2: Roll 2*/
    scorecard.addRoll(5)
    expect(scorecard.totalScore()).toEqual(14)
    /*Frame 3: Roll 1*/
    scorecard.addRoll(6)
    expect(scorecard.totalScore()).toEqual(14)
    /*Frame 3: Roll 2*/
    scorecard.addRoll(4)
    expect(scorecard.totalScore()).toEqual(14)
    /*Frame 4: Roll 1*/
    scorecard.addRoll(5)
    expect(scorecard.totalScore()).toEqual(29)
    /*Frame 4: Roll 2*/
    scorecard.addRoll(5)
    expect(scorecard.totalScore()).toEqual(29)
    /*Frame 5: Roll 1*/
    scorecard.addRoll(10)
    expect(scorecard.totalScore()).toEqual(49)
    /*Frame 6: Roll 1*/
    scorecard.addRoll(0)
    expect(scorecard.totalScore()).toEqual(49)
    /*Frame 6: Roll 2*/
    scorecard.addRoll(1)
    expect(scorecard.totalScore()).toEqual(61)
    /*Frame 7: Roll 1*/
    scorecard.addRoll(7)
    expect(scorecard.totalScore()).toEqual(61)
    /*Frame 7: Roll 2*/
    scorecard.addRoll(3)
    expect(scorecard.totalScore()).toEqual(61)
    /*Frame 8: Roll 1*/
    scorecard.addRoll(6)
    expect(scorecard.totalScore()).toEqual(77)
    /*Frame 8: Roll 2*/
    scorecard.addRoll(4)
    expect(scorecard.totalScore()).toEqual(77)
    /*Frame 9: Roll 1*/
    scorecard.addRoll(10)
    expect(scorecard.totalScore()).toEqual(97)
    /*Frame 10: Roll 1*/
    scorecard.addRoll(2)
    expect(scorecard.totalScore()).toEqual(97)
    /*Frame 10: Roll 2*/
    scorecard.addRoll(8)
    expect(scorecard.totalScore()).toEqual(117)
    /*Frame 10: Roll 3*/
    scorecard.addRoll(6)
    expect(scorecard.totalScore()).toEqual(133)
  });




});
