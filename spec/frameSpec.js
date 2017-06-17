describe ('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('Frame size', function() {
    it('can have at most two rolls', function() {
      frame.add_roll(1);
      frame.add_roll(2);
      expect(function(){frame.add_roll(4)}).toThrow(new Error('Each frame can have at most two rolls'));
    });
  });

  describe('Total sum of pins', function(){
    it('Maximum knocked down pins in each frame is 10', function(){
      frame.add_roll(6);
      expect(function(){frame.add_roll(8)}).toThrow(new Error('Maximum knocked down pins in each frame is 10'));
    });
  });

  describe('Frame score', function(){
    it('calculates the score for one single frame with no bonus', function(){
      frame.add_roll(1);
      frame.add_roll(4);
      expect(frame.score_no_bonus()).toEqual(5)
    });
  });

  describe('Frame score', function(){
    it('calculates the score for one single frame with strike', function(){
      frame.add_roll(10);
      expect(frame.is_strike()).toBe(true)
    });
  });

  describe('Frame score', function(){
    it('calculates the score for one single frame with strike', function(){
      frame.add_roll(7);
      frame.add_roll(3);
      expect(frame.is_strike()).toBe(false)
    });
  });

  describe('Frame score', function(){
    it('calculates the score for one single frame with spare', function(){
      frame.add_roll(3);
      frame.add_roll(7);
      expect(frame.is_spare()).toBe(true)
    });
  });

  describe('Frame score', function(){
    it('calculates the score for one single frame with spare', function(){
      frame.add_roll(3);
      frame.add_roll(3);
      expect(frame.is_spare()).toBe(false)
    });
  });

});
