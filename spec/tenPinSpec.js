describe('TenPin', function() {

  beforeEach(function(){
    frame = new Frame();
    tenP = new TenPin(Frame);
    roll1 = new Roll;
    roll2 = new Roll;
  });

  describe('game begins.', function() {

    it('Creates a max frame constant of 10', function() {
      expect(tenP.FRAMES).toEqual(10)
    });

    it('Sets the current frame to 0', function() {
      expect(tenP.currentFrame).toEqual(0)
    });

    it('Creates the first frame object in the framesCreated array', function() {
      expect(tenP.framesCreated.length).toEqual(1)
    });

    // xit('Creates the first frame object and also sets its index to the current frame which is 0', function() {
    //   spyOn that the frame uppdate index is set
    //   expect(tenP.framesCreated.length).toEqual(1)
    // })

    it('Once a frame is played it sets the current frame to the next frame', function() {
      tenP.createMoveFrame()
      expect(tenP.currentFrame).toEqual(1)
    });

     it('Once a frame is played it creates the next frame object', function() {
      tenP.createMoveFrame()
      expect(tenP.framesCreated.length).toEqual(2)
    });

  });

  describe('frame is not a strike or spare.', function() {

    it('Scores the first roll of 7 for the frame 1', function() {
      //trouble setting a spyOn to see that an object in the framesCreated array was alled. Any pointers would be great
      spyOn(frame, 'setRollOneScore')
      tenP.frameFirstRoll(roll1)
      expect(frame.setRollOneScore()).toHaveBeenCalled()
    });

    it('Scores the second roll of 2 for the frame 1', function() {
      spyOn(frame, 'setRollTwoScore')
      tenP.frameSecondRoll(roll2)
      expect(frame.setRollTwoScore()).toHaveBeenCalled()
    });

    it('Sets to the current frame after the second roll to the next frame', function() {
      tenP.playFrame(roll1, roll2)
      expect(tenP.currentFrame).toEqual(1)
     });

    it('Creates the next frame object in the frame array after the second roll', function() {
      tenP.playFrame(roll1, roll2)
      expect(tenP.framesCreated.length).toEqual(2)
     });

  });

  describe('frame is a spare', function() {

    it('is confirmed when roll 1 and roll 2 equals 10', function() {
      spyOn(roll1, 'getPinsHit').and.returnValue(4)
      spyOn(roll2, 'getPinsHit').and.returnValue(6)
      expect(tenP.checkForSpare(roll1, roll2)).toEqual(true)
    });

    it('creates the next frame and sets the bonus roll index to the next frame', function() {
      spyOn(roll1, 'getPinsHit').and.returnValue(4)
      spyOn(roll2, 'getPinsHit').and.returnValue(6)
      spyOn(tenP, 'playSpare')
      tenP.playFrame(roll1, roll2)
      expect(tenP.playSpare()).toHaveBeenCalled()
    });

  });

  describe('With a first frame spare and a completed standard second frame having roll1 3 and roll2 4.', function() {

    it('Update method will set the first frame bonus score to the second frame roll1 score of 3', function() {
      spyOn(tenP, 'rollTwoUpdate')
      spyOn(tenP, 'bonusRollUpdate')
      tenP.updateScores()
      expect(tenP.rollTwoUpdate()).toHaveBeenCalled()
      expect(tenP.bonusRollUpdate()).toHaveBeenCalled()
    });

  });

  describe('first roll is a strike.', function() {

    it('Checks that that first roll was 10 and returns true if it was', function() {
      spyOn(roll1, 'getPinsHit').and.returnValue(10)
      expect(tenP.checkForStrike(roll1)).toEqual(true)
    });

    it('Scores the first roll as 10', function() {
      spyOn(tenP, 'frameFirstRoll')
      tenP.playStrike(roll1)
      expect(tenP.frameFirstRoll(roll1)).toHaveBeenCalled()
    });

     it('Creates and moves to the next frame', function() {
      spyOn(tenP, 'createMoveFrame')
      spyOn(frame, 'setRollTwoIndex')
      spyOn(frame, 'setBonusRollIndex')
      tenP.playStrike(roll1)
      expect(tenP.createMoveFrame).toHaveBeenCalled()
    });

     it('Sets the roll 2 index the next frame', function() {
      spyOn(frame, 'setRollTwoIndex')
      tenP.playStrike(roll1)
      expect(frame.setRollTwoIndex(this.currentFrame)).toHaveBeenCalled()
     })

     it('Sets the bonus roll index to the next frame.', function() {
      spyOn(frame, 'setBonusRollIndex')
      tenP.playStrike(roll1)
      expect(frame.setBonusRollIndex(this.currentFrame)).toHaveBeenCalled()
     })

   });

});