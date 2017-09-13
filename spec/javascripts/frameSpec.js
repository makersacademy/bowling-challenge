describe('Frames', function() {

  var newFrame;

  beforeEach(function(){
    newFrame = new Frame();
  });

  describe('a new frame', function() {

    it('starts with an empty turn array', function() {
      expect(newFrame.turns).toEqual([]);
    });

    it('starts with a zero score', function(){
      expect(newFrame.score).toEqual(0);
    });

  });

  describe('calculating the score of one frame', function() {

    it('calculates score after 2 turns', function() {
      newFrame.addScore(4);
      newFrame.addScore(3);
      expect(newFrame.score).toEqual(7);
    });

  });

  describe('determining a strike', function() {

    it('returns true if the first score is 10', function() {
      newFrame.addScore(10);
      expect(newFrame.isStrike()).toEqual(true);
    });

    it('returns false if the first score is not 10', function(){
      newFrame.addScore(4);
      newFrame.addScore(3);
      expect(newFrame.isStrike()).toEqual(false);
    });

  });

  describe('determining a spare', function(){

    it('returns true if the sum of scores is 10', function() {
      newFrame.addScore(5);
      newFrame.addScore(5);
      expect(newFrame.isSpare()).toEqual(true);
    });

    it('returns false if the sum of scores is under 10', function(){
      newFrame.addScore(4);
      newFrame.addScore(3);
      expect(newFrame.isSpare()).toEqual(false);
    });

  });

});
