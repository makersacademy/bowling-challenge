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

    it('when a new frame, the results array is empty',function(){
      expect(frame._results.length).toBe(0);
    });
  });

  describe('#updateResult', function(){
    it('when 5 pins are knock down in a roll this score is added to the result array',function(){
      frame.updateResult(5);
      expect(frame._results).toContain(5);
    });
  });

  describe('#getRegularScore', function(){
    it('when 5 + 2 pins are knocked down in two consecutive rolls the regular score is 7',function(){
      frame.updateResult(5);
      frame.updateResult(2);
      expect(frame.getRegularScore()).toBe(7);
    });
  });

  // describe('#getBonusScore',function(){
  //   it('when strike the bonus is equal to the next frame regular score',function(){
  //     frame.updateResult(5);
  //     frame.updateResult(4);
  //     frame._strike = true;
  //     frame.getRegularScore();
  //     expect(frame.getBonusScore()).toBe(9);
  //   });
  //
  //   it('when spares the bonus is equal to the next frame 1st roll score',function(){
  //     frame.updateResult(5);
  //     frame.updateResult(4);
  //     frame._spare = true;
  //     frame.getBonusScore()
  //     expect(frame.getBonusScore()).toBe(5);
  //   });
  // });

  describe('#playFrame', function(){
    it('when the first roll score in under 10, another roll will be played',function(){
      frame.playFrame();
      expect(frame._results.length).toBe(2);
    });
  });

  describe('#roll', function(){
    it('does not set to "yes" strike neither spare if in the two frame rolls the score is under 10',function(){
      for(var i=1;i<=2;i++){
        frame.updateResult(4);
      }
      var frameScore = frame.getRegularScore();
      frame.checkSpare(frameScore);
      expect(frame.getStrikeStatus()).toBe("no");
      expect(frame.getSpareStatus()).toBe("no");
    });

    it('sets strike to "yes", if in the 1st roll all pins are knocked down',function(){
      frame.updateResult(10);
      frame.checkStrike();
      expect(frame.getStrikeStatus()).toBe("yes");
    });

    it('sets spare to "yes", if in the 1st and 2nd rolls all pins are knocked down',function(){
      for(var i=1;i<=2;i++){
        frame.updateResult(5);
      }
      var frameScore = frame.getRegularScore()
      frame.checkSpare(frameScore);
      expect(frame.getSpareStatus()).toBe("yes");
    });
  });

  describe('#lastGameAdditionalsWhenStrike', function(){
    it('allows two more rolls if last game was strike',function(){
      frame.lastGameAdditionalsWhenStrike()
      expect(frame._results.length).toBe(2)
    });
  });

  describe('#lastGameAdditionalsWhenSpare', function(){
    it('allows one more roll if last game was spare',function(){
      frame.lastGameAdditionalsWhenSpare()
      expect(frame._results.length).toBe(1)
    });
  });
});
