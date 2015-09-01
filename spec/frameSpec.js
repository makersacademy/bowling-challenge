describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('frame properties', function() {

    it('starts with an empty array', function() {
      expect(frame.rollScore).toEqual([]);
    });

    it('updates with a roll score', function () {
      frame.roll(6);
      expect(frame.rollScore).toEqual([6]);
    });

    it('normally ends after two rolls', function () {
      frame.roll(6);
      frame.roll(3);
      expect(frame.isComplete()).toBe(true);
    });

    it('ends frame after one strike', function() {
      frame.roll(10);
      expect(frame.isComplete()).toBe(true);
    });

    it('applies a spare bonus attribute', function () {
      frame.roll(6);
      frame.roll(4);
      expect(frame.bonusSetter()).toBe('spare');
    });

    it('applies a strike bonus attribute', function () {
      frame.roll(10);
      expect(frame.bonusSetter()).toBe('strike');
    });
  });

});
