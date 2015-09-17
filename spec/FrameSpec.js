describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('pins', function() {
    it('begins each new frame with 10 pins', function() {
      expect(frame.totalPins).toEqual(10);
    });

    it('allows pins to be knocked down', function() {
      expect(frame.rollOne(1)).toEqual(9);
    });
  });

  describe('frames', function() {
    it('a player can have 2 turns within a frame', function() {
      expect(frame.totalRollsPerFrame).toEqual(2);
    });

    it('a player can not have more than 2 turns per frame', function() {
      frame.rollOne(2);
      frame.rollTwo(4);
      expect(frame.totalRollsPerFrame).toEqual(0);
    });

    it('decreases the amount of throws after each go', function() {
      frame.rollOne(2);
      frame.rollTwo(5);
      expect(frame.totalRollsPerFrame).toEqual(0);
    });

    it('only allows 10 frames per game', function() {
      expect(frame.totalFrames).toEqual(10);
    });

    it('counts the number of completed frames', function() {
      expect(frame.frameCount(1)).toEqual(9);
    });

    it('starts a new frame', function() {
      expect(frame.startNewFrame()).toBe('New Frame');
    });
  });

  describe('scoring', function(){
    it('keeps count of the score after the first throw', function(){
      frame.rollOne(3);
      expect(frame.rollOneScore).toEqual(3);
    });

    it('keeps count of the score after the second throw', function(){
      frame.rollTwo(4);
      expect(frame.rollTwoScore).toEqual(4);
    });

    it('totals score after each frame', function() {
      frame.rollOne(2);
      frame.rollTwo(2);
      expect(frame.totalFrameScore).toEqual(4);
    });

    it('is a strike when all pins are hit in one go', function() {
      frame.rollOne(10);
      expect(frame.fullStrike()).toBe('STRIKE!');
    });
  });
});