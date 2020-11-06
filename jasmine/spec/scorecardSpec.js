describe('Scorecard', function() {

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  it('checks there is a blank scorecard to begin with', function(){
    expect(scorecard.score).toEqual({'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0})
  });

  it('checks that a user can add a roll and it ', function(){
    scorecard.addRoll(1.1, 4)
    scorecard.addRoll(1.2, 5)
    expect(scorecard.score).toEqual({'1.1':4, '1.2':5, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0})
  });

  it('checks the reset function resets the scorecard', function(){
    scorecard.addRoll(1.1, 4)
    scorecard.addRoll(1.2, 5)
    scorecard.resetScorecard()
    expect(scorecard.score).toEqual({'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0})
  });

  it('checks that total adds one frame together', function(){
    scorecard.addRoll(1.1, 5)
    scorecard.addRoll(1.2, 3)
    expect(scorecard.total(1)).toEqual(8)
  });

  it('checks that total adds 4 frames together', function(){
    scorecard.addRoll(1.1, 5)
    scorecard.addRoll(1.2, 3)
    scorecard.addRoll(2.1, 2)
    scorecard.addRoll(2.2, 4)
    scorecard.addRoll(3.1, 6)
    scorecard.addRoll(3.2, 1)
    scorecard.addRoll(4.1, 2)
    scorecard.addRoll(4.2, 1)
    expect(scorecard.total(4)).toEqual(24)
  });

  it('checks that a strike on roll 1 on frame 1 adds bonus points of next frame', function(){
    scorecard.addRoll(1.1, 10)
    scorecard.addRoll(1.2, 0)
    scorecard.addRoll(2.1, 5)
    scorecard.addRoll(2.2, 3)
    expect(scorecard.total(1)).toEqual(18)
  });

});
