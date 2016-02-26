describe('Frame', function() {
  var frame;
  var score1 = 3;
  var score2 = 5;
  var strike = 10;

  beforeEach(function() {
    frame = new Frame();
  });


  describe('-> initialising a frame', function() {
    it('-> starts the game with empty rolls', function(){
      expect(frame._rolls).toEqual([]);
    });
  });

  describe('-> rolling without strikies or spares', function() {
    it('-> allows player to roll his first ball ', function() {
      frame.addRoll(score1)
      expect(frame._rolls).toContain(score1)
    });

    it('-> allows player to roll his second', function (){
      frame.addRoll(score1)
      frame.addRoll(score2)
      expect(frame._rolls).toContain(score2)
    });

    it('-> prevents the player from rolling', function(){
      frame.addRoll(score1)
      frame.addRoll(score1)
      expect(function() {
        frame.addRoll(score1)
      }).toThrowError('Max two rolls per turn or one per strike!')
    });
  });

  describe('-> strikes & spares', function() {
    it('-> knows that a strike is', function() {
      frame.addRoll(strike);
      expect(frame.isStrike()).toBeTruthy();
    });

    it('-> prevents the player from rolling again after a strike', function() {
      frame.addRoll(strike)
      expect(function() {
        frame.addRoll(score1);
      }).toThrowError('Max two rolls per turn or one per strike!')
    });

    it('-> knows what a spare is', function(){
      frame.addRoll(score2)
      frame.addRoll(score2)
      expect(frame.isSpare()).toBeTruthy();
    });
  });
});
