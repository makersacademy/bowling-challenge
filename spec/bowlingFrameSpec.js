describe('Frame', function(){
  'use strict'
  var frame;
  var roll;

  beforeEach(function(){
    frame = new Frame();
    roll = jasmine.createSpyObj("roll", ["play"]);

  });

  describe('::new', function(){
    it('when a new frame, the strike is setted to "no"',function(){
      expect(frame._strike).toBe("no");
    });

    it('when a new frame, the spares is setted to "no"',function(){
      expect(frame._spare).toBe("no");
    });

    it('when a new frame, the regular score is setted to 0',function(){
      expect(frame._regularScore).toBe(0);
    });

    it('when a new frame, the bonus score is setted to 0',function(){
      expect(frame._bonusScore).toBe(0);
    });

    it('when a new frame, the results array is empty',function(){
      expect(frame._results.length).toBe(0);
    });
  });

  describe('#_roll', function(){
    it('does not set to "yes" strike neither spare if in the two frame rolls the score is under 10',function(){
      for(var i=1;i<=2;i++){
        frame.updateResult(4);
      }
      var frameScore = frame._getRegularScore();
      frame.checkSpare(frameScore);
      expect(frame.getStrikeStatus()).toBe("no");
      expect(frame.getSpareStatus()).toBe("no");
    });
  });

  describe('#updateResult', function(){
    it('when 5 pins are knock down in a roll this score is added to the result array',function(){
      frame.updateResult(5);
      expect(frame._results).toContain(5);
    });
  });

  describe('#_getRegularScore', function(){
    it('when 5 + 2 pins are knocked down in two consecutive rolls the regular score is 7',function(){
      frame.updateResult(5);
      frame.updateResult(2);
      expect(frame._getRegularScore()).toBe(7);
    });
  });

  describe('#checkStrike', function(){
    it('sets strike to "yes", if in the 1st roll all pins are knocked down',function(){
      frame.updateResult(10);
      frame.checkStrike();
      expect(frame._strike).toBe("yes");
    });
  });

  describe('#checkSpare', function(){
    it('sets spare to "yes", if in the 1st and 2nd rolls all pins are knocked down',function(){
      for(var i=1;i<=2;i++){
        frame.updateResult(5);
      }
      var frameScore = frame._getRegularScore()
      frame.checkSpare(frameScore);
      expect(frame.getSpareStatus()).toBe("yes");
    });
  });

  describe('#getStrikeStatus', function(){
    it('sets strike to "yes", if in the 1st roll all pins are knocked down',function(){
      frame.updateResult(10);
      frame.checkStrike();
      expect(frame.getStrikeStatus()).toBe("yes");
    });
  });
});
