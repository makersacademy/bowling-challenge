describe('TenPin', function() {

    var rollSpare1;
    var rollSpare2;

  beforeEach(function(){
    frame = new Frame();
    tenP = new TenPin(Frame);
    roll1 = new Roll;
    roll2 = new Roll;
    rollSpare1 = jasmine.createSpyObj('rollSpare1', ['getPinsHit']);
    rollSpare1.getPinsHit(4);
    rollSpare2 = jasmine.createSpyObj('rollSpare2', ['getPinsHit']);
    rollSpare2.getPinsHit(6);

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

    xit('Creates the first frame object and also sets its index to the current frame which is 0', function() {
      spyOn that the frame uppdate index is set
      expect(tenP.framesCreated.length).toEqual(1)
    })

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
      spyOn(tenP.framesCreated[0], 'framesCreated')
      tenP.frameFirstRoll(roll1)
      expect(tenP.framesCreated[0].setRollOneScore()).toHaveBeenCalled()
    })

    it('Scores the second roll of 2 for the frame 1', function() {
      spyOn(tenP.framesCreated[0], 'setRollTwoScore')
      tenP.frameSecondRoll(roll2)
      expect(tenP.framesCreated[0].setRollTwoScore()).toHaveBeenCalled()
    })

    it('Moves to the next frame after the second roll', function() {
      tenP.playFrame(roll1, roll2)
      expect(tenP.currentFrame).toEqual(1)
     })

  })

  describe('frame is a spare', function() {

    it('is confirmed when roll 1 and roll 2 equals 10', function() {
      spyOn(roll1, 'getPinsHit').and.returnValue(4)
      spyOn(roll2, 'getPinsHit').and.returnValue(6)
      expect(tenP.checkForSpare(roll1, roll2)).toEqual(true)
    })

    it('creates the next frame set the bonus roll to the first roll of the next frame', function() {
      spyOn(roll1, 'getPinsHit').and.returnValue(4)
      spyOn(roll2, 'getPinsHit').and.returnValue(6)
      tenP.playFrame(roll1, roll2)
    })

  })



  describe('first roll is a strike.', function() {

    it('Tells the frame to score 10 for the first roll', function() {

    })

    it('Creates the second frame', function() {

    })

   })

});