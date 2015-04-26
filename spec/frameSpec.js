describe("Frame", function(){

  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  describe('roll counting', function(){

    it('should have a roll', function(){
      expect(frame.rolls.length).not.toEqual(0);
    });

    it('knows if it is a strike', function(){
      frame.rolls[0].play(10)
      expect(frame.isStrike()).toBe(true);
    });

    it('knows if it is a spare', function(){
      frame.rolls[0].play(5)
      frame.rolls[1].play(5)
      expect(frame.isSpare()).toBe(true);
    });
  });
});