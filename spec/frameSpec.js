describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('when initialized', function(){

    it('starts with empty score array', function(){
      expect(frame.scores.length).toEqual(0);
    });

    it('starting frame type is \'pending\'', function(){
      expect(frame.frameType).toEqual(FrameType.PENDING);
    });

    it('starting total is 0', function(){
      expect(frame.total()).toEqual(0);
    });
  });

  describe('when a score is added', function(){

    it('adds score to array', function(){
      frame.addScore(3);
      expect(frame.scores.length).toEqual(1);
    });

    it('adds scores in order', function(){
      frame.addScore(3);
      frame.addScore(5);
      test = (frame.scores[0] === 3 && frame.scores[1] == 5)
      expect(test).toEqual(true);
    });
  });

  describe('getting the frame total', function(){

    it('returns 0 when score array is empty', function(){
      expect(frame.total()).toEqual(0);
    });

    it('returns correct score for 2 balls', function(){
      frame.addScore(5);
      frame.addScore(3);
      expect(frame.total()).toEqual(8);
    });

    it('score can not be over 10', function(){
      frame.addScore(8);
      frame.addScore(8);
      expect(frame.total()).toEqual(10);
    });
  });

  describe('getting the frame type', function(){
    describe('frame type: PENDING', function(){
      it('when no balls have been played', function(){
        expect(frame.frameType).toEqual(FrameType.PENDING);
      });
      it('when 1 ball has been played with a score less than 10', function(){
        frame.addScore(3);
        expect(frame.frameType).toEqual(FrameType.PENDING);
      });
    });
    describe('frame type: GUTTER', function(){
      it('when 2 balls have been played with 0 score', function(){
        frame.addScore(0);
        frame.addScore(0);
        expect(frame.frameType).toEqual(FrameType.GUTTER);
      });
    });
    describe('frame type: OPEN', function(){
      it('when 2 balls have been played with a total below 10', function(){
        frame.addScore(5);
        frame.addScore(3);
        expect(frame.frameType).toEqual(FrameType.OPEN);
      });
    });
    describe('frame type: SPARE', function(){
      it('when 2 balls have been played with a total of 10', function(){
        frame.addScore(5);
        frame.addScore(5);
        expect(frame.frameType).toEqual(FrameType.SPARE);
      });
    });
    describe('frame type: STRIKE', function(){
      it('when 1 ball has been played with a score of 10', function(){
        frame.addScore(10);
        expect(frame.frameType).toEqual(FrameType.STRIKE);
      });
    });
    describe('frame type: BONUS', function(){
      it('when 1 ball has been played with a score of 10', function(){
        frame.addScore(10);
        frame.addScore(2);
        frame.addScore(2);
        expect(frame.frameType).toEqual(FrameType.BONUS);
      });
    });
  });
});
