describe('Frame', function(){
  var frames;

  beforeEach(function(){
    frames = new Frame;
  });

  describe('Defaults', function(){

    it('Can be an instance of frame', function(){
      expect(frames).toBeInstanceOf(Frame);
    });
    
    it('Has score for current frame', function(){
      expect(frames.score).toEqual(0);
    });

    it('Has score for the first roll', function(){
      expect(frames.rollOne).toEqual(0);
    });

    it('Has score for second roll', function(){
      expect(frames.rollTwo).toEqual(0);
    });
  });

  describe('Roll', function(){
    it('Can accept a first roll and add it to the score for the first roll', function(){
      frames.roll(4);
      expect(frames.rollOne).toEqual(4);
    });

    it('Can accept a second roll and add it to the score for the second roll', function(){
      frames.roll(4);
      frames.roll(4);
      expect(frames.rollTwo).toEqual(4);
    });

    it('Takes both rolls and will set the total score', function(){
      frames.roll(4);
      frames.roll(4);
      expect(frames.score).toEqual(8);
    });

    it('Will only allow 2 rolls to be set', function(){
      frames.roll(4);
      frames.roll(4);

      expect(function() { frames.roll(2); }).toThrowError('Can only accept 2 rolls');
    });

    it('Will only allow the user to input a score of 10', function(){
      expect(function() { frames.roll(11); }).toThrowError('Score of over 10 is not possible');
    });
  });
});