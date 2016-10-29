describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('isComplete', function() {
    it('should be false by default', function() {
      expect(frame.isComplete()).toBe(false);
    });

    it('should be true after two rolls', function() {
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.isComplete()).toBe(true);
    });
  });

  describe('addRoll', function(){
    it('can add and save two rolls', function() {
      frame.addRoll(3);
      frame.addRoll(6);
      expect(frame.rollsContain(3)).toBe(true);
      expect(frame.rollsContain(6)).toBe(true);
    });

    it('shouldnt add more than 2 rolls', function() {
      frame.addRoll(5);
      frame.addRoll(2);
      frame.addRoll(3);
      expect(frame.rollsContain(3)).toBe(false);
    });

    it('should throw an error when adding a roll > 10', function(){
      expect(function(){ frame.addRoll(11) }).toThrowError('Cannot add a roll over 10');
    });
  });

});
