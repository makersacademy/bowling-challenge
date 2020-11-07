describe('Scorecard', function() {
  var scorecard
  var print

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

  it('checks that a strike on roll 2 of frame 1 adds bonus points of next frame', function() {
    scorecard.addRoll(1.1, 0)
    scorecard.addRoll(1.2, 10)
    scorecard.addRoll(2.1, 8)
    scorecard.addRoll(2.2, 1)
    expect(scorecard.total(1)).toEqual(19)
  });

  it('checks that a strike on roll 2 of frame 5 adds bonus points of next frame', function() {
    scorecard.addRoll(1.1, 0)
    scorecard.addRoll(1.2, 2)
    scorecard.addRoll(2.1, 8)
    scorecard.addRoll(2.2, 1)
    scorecard.addRoll(3.1, 0)
    scorecard.addRoll(3.2, 1)
    scorecard.addRoll(4.1, 8)
    scorecard.addRoll(4.2, 1)
    scorecard.addRoll(5.1, 0)
    scorecard.addRoll(5.2, 10)
    scorecard.addRoll(6.1, 6)
    scorecard.addRoll(6.2, 3)
    expect(scorecard.total(6)).toEqual(49)
  });

  it('checks that total calculates without subsequent rolls if a strike is rolled on roll 1 of frame 3', function() {
    scorecard.addRoll(1.1, 0)
    scorecard.addRoll(1.2, 2)
    scorecard.addRoll(2.1, 8)
    scorecard.addRoll(2.2, 1)
    scorecard.addRoll(3.1, 0)
    scorecard.addRoll(3.2, 10)
    expect(scorecard.total(3)).toEqual(21)
  });

  it('checks that a spare on frame 4 adds bonus points of next frame', function() {
    scorecard.addRoll(1.1, 0)
    scorecard.addRoll(1.2, 2)
    scorecard.addRoll(2.1, 8)
    scorecard.addRoll(2.2, 1)
    scorecard.addRoll(3.1, 0)
    scorecard.addRoll(3.2, 1)
    scorecard.addRoll(4.1, 8)
    scorecard.addRoll(4.2, 2)
    scorecard.addRoll(5.1, 5)
    scorecard.addRoll(5.2, 3)
    scorecard.addRoll(6.1, 6)
    scorecard.addRoll(6.2, 3)
    expect(scorecard.total(6)).toEqual(44)
  });

  it('checks that total still calculates if spare at end of frame and next rolls not rolled yet', function() {
    scorecard.addRoll(1.1, 0)
    scorecard.addRoll(1.2, 2)
    scorecard.addRoll(2.1, 8)
    scorecard.addRoll(2.2, 2)
    expect(scorecard.total(2)).toEqual(12)
  });

  it('checks 10th frame strike bonuses calculated correctly', function() {
    scorecard.addRoll(1.1, 0)
    scorecard.addRoll(1.2, 2)
    scorecard.addRoll(2.1, 8)
    scorecard.addRoll(2.2, 1)
    scorecard.addRoll(3.1, 0)
    scorecard.addRoll(3.2, 1)
    scorecard.addRoll(4.1, 8)
    scorecard.addRoll(4.2, 2)
    scorecard.addRoll(5.1, 5)
    scorecard.addRoll(5.2, 3)
    scorecard.addRoll(6.1, 6)
    scorecard.addRoll(6.2, 3)
    scorecard.addRoll(7.1, 0)
    scorecard.addRoll(7.2, 2)
    scorecard.addRoll(8.1, 8)
    scorecard.addRoll(8.2, 1)
    scorecard.addRoll(9.1, 0)
    scorecard.addRoll(9.2, 1)
    scorecard.addRoll(10.1, 10)
    scorecard.addRoll(10.2, 10)
    scorecard.addRoll(10.3, 10)
    expect(scorecard.total(10)).toEqual(86)
  });

  it('prints frame, roll, pins knocked and score', function() {
    scorecard.addRoll(1.1, 0)
    scorecard.addRoll(1.2, 2)
    scorecard.addRoll(2.1, 5)
    scorecard.addRoll(2.2, 3)
    let string = scorecard.print(2)
    expect(string).toEqual("Frame.Roll = 1.1 Pins knocked = 0\nFrame.Roll = 1.2 Pins knocked = 2\nYour score = 10\n")
  });

});
