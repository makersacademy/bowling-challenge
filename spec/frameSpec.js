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

    it('Has bool value which is set false which checks if the frame is complete', function(){
      expect(frames.complete).toBeFalsy();
    });
  });

  describe('getRoll', function(){
    it('Can accept a first roll and add it to the score for the first roll', function(){
      frames.getRoll(4);
      expect(frames.rollOne).toEqual(4);
    });

    it('Sets the score to the first roll if only one roll has been completed', function(){
      frames.getRoll(4);
      expect(frames.score).toEqual(4);
    });

    it('Can accept a second roll and add it to the score for the second roll', function(){
      frames.getRoll(4);
      frames.getRoll(4);
      expect(frames.rollTwo).toEqual(4);
    });

    it('Takes both rolls and will set the total score', function(){
      frames.getRoll(4);
      frames.getRoll(4);
      expect(frames.score).toEqual(8);
    });

    it('Will only allow 2 rolls to be set', function(){
      frames.getRoll(4);
      frames.getRoll(4);

      expect(function() { frames.getRoll(2); }).toThrowError('Can only accept 2 rolls');
    });

    it('Will only allow the user to input a score of 10', function(){
      expect(function() { frames.getRoll(11); }).toThrowError('Score of over 10 is not possible');
    });
  });
});