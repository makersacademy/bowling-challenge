describe('Frame', function() {
  beforeEach(function(){
    frame = new Frame();
    testScore = 1
    testRollNumber = 1
    roll = new Roll(testScore,testRollNumber)
  });

  it('Each frame starts with 10 pins remaining', function() {
    expect(frame.pinsRemaining()).toEqual(10);
  });

  it('Reduces pins remaining after scoring roll', function() {
    frame.add(roll);
    expect(frame.pinsRemaining()).toEqual(9);
  });

  it("Doesn't reduce pins remaining after gutter ball", function() {
    frame = new Frame ();
    gutterBall = new Roll(0,1);
    frame.add(gutterBall);
    expect(frame.pinsRemaining()).toEqual(10);
  });

  it('End frame if player scores strike (excl 10th frame)', function() {
    frame = new Frame();
    testScore = 10
    testRollNumber = 1
    roll = new Roll(testScore,testRollNumber)
    frame.add(roll);
    expect(frame._frameOver).toEqual(true);
  });

  describe('Record Rolls', function() {
    beforeEach(function(){
      frame = new Frame();
      testScore2 = 1
      testRollNumber2 = 2
      roll2 = new Roll(testScore2,testRollNumber2)
      frame.add(roll)
      frame.add(roll2)
    });

    it('Can record rolls', function() {
      expect(function() {frame.add(roll)}).not.toThrow();
    });

    it('Lists rolls consecutively', function() {
      secondRollinFrame = roll2
      expect(frame._rolls[1]).toEqual(secondRollinFrame);
    });

    it('Returns pins score for frame', function() {
      expect(frame.pinScore()).toEqual(2);
    });

    it('Ends frame after second roll (excl 10th frame)', function() {
      expect(frame._frameOver).toEqual(true);
    });
  });
  describe('Bonus', function() {
    beforeEach(function(){
      frame = new Frame();
      firstRoll = new Roll(5,1);
      secondRoll = new Roll(5,2);
    });
    it('Returns strike bonus of 10 for two rolls of 5 following strike', function() {
      frame.strikeBonus(firstRoll,secondRoll);
      expect(frame._bonus).toEqual(10);
    });
    it('Returns spare bonus of 5 for one roll of 5 following spare', function() {
      frame.spareBonus(firstRoll);
      expect(frame._bonus).toEqual(5);
    });
  });
});

//
// describe('10th Frame', function() {
//   beforeEach(function() {
//     frame = new Frame(10,);
//   });
//
//   it("Doesn't end frame after second roll on 10th frame", function() {
//     frame._frameNumber = 10;
//     frame.addPoints(5);
//     frame.addPoints(5);
//     expect(frame.status()).toEqual(false);
//   });
//
//   it("Doesn't end frame after strike on 10th frame", function() {
//     frame._frameNumber = 10;
//     frame.addPoints(10);
//     expect(frame.status()).toEqual(false);
//   });
// })
//
// describe('Bonus Score', function() {
//   beforeEach(function(){
//     frame1 = new Frame();
//   });
//
//   it('Calculates a bonus score of 10 for a strike after a spare', function() {
//     frame1.addPoints(5);
//     frame1.addPoints(5);
//     frame2 = new Frame(frame1);
//     frame2.addPoints(10);
//     frame2.calculateBonus(frame1);
//     expect(frame1._bonus).toEqual(10);
//   });
