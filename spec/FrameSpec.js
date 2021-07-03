describe('Frame', function() {
  beforeEach(function(){
    frame = new Frame();
  });

  it('Each frame starts with 10 pins remaining', function() {
    expect(frame.pinsRemaining()).toEqual(10);
  });

  it('Reduces pins remaining after scoring roll', function() {
    frame.add(1);
    expect(frame.pinsRemaining()).toEqual(9);
  });

  it("Doesn't reduce pins remaining after gutter ball", function() {
    frame = new Frame ();
    gutterBall = 0;
    frame.add(gutterBall);
    expect(frame.pinsRemaining()).toEqual(10);
  });

  it('End frame if player scores strike (excl 10th frame)', function() {
    frame = new Frame();
    strike = 10
    frame.add(strike);
    expect(frame._frameOver).toEqual(true);
  });

  describe('Record Rolls', function() {
    beforeEach(function(){
      frame = new Frame();
      roll1 = 1;
      roll2 = 2;
      frame.add(roll1);
      frame.add(roll2);
    });

    it('Can record rolls', function() {
      expect(function() {frame.add(roll1)}).not.toThrow();
    });

    it('Lists rolls consecutively', function() {
      secondRollinFrame = roll2
      expect(frame._rolls[1]).toEqual(secondRollinFrame);
    });

    it('Returns pins score for frame', function() {
      expect(frame.pinScore()).toEqual(3);
    });

    it('Ends frame after second roll (excl 10th frame)', function() {
      expect(frame._frameOver).toEqual(true);
    });
  });

  describe('Bonus', function() {
    beforeEach(function(){
      frame = new Frame();
      firstRoll = 5;
      secondRoll = 5;
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
