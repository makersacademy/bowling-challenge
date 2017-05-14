(function() {
  'use strict';
  describe('OnePlayerGame', function() {
    var OnePlayerGame = OnePlayerGameFile.OnePlayerGame;
    var onePlayerGame;
    var frame1;
    var frame2;

    beforeEach(function() {
      onePlayerGame = new OnePlayerGame();
      frame1 = onePlayerGame.frame1;
      frame2 = onePlayerGame.frame2;
    });

    it('activates next frame after two rolls of <10 combined', function() {
      spyOn(frame2, 'activate');
      onePlayerGame.roll(4);
      onePlayerGame.roll(4);
      expect(frame2.activate).toHaveBeenCalled();
    });

    it('has an array "frames" containing 10 objects', function() {
      expect(onePlayerGame.frames.length).toBe(10);
    });

    it('has an array "activeFrames" initially containing 1 object', function() {
      expect(onePlayerGame.activeFrames().length).toBe(1);
    });

    it('has an activated frame1 upon creation', function() {
      expect(frame1.isActive()).toBe(true);
    });

    it('knows how to activate the next inactive frame', function() {
      onePlayerGame.frame1.deactivate();
      onePlayerGame.frame2.activate();
      onePlayerGame.activateNextFrame();
      expect(onePlayerGame.frame3.isActive()).toBe(true);
    });
    it('knows to activate no further frames after 10', function() {
      onePlayerGame.frame1.deactivate();
      onePlayerGame.frame10.activate();
      onePlayerGame.activateNextFrame();
      expect(onePlayerGame.frame1.isActive()).toBe(false);
    });
    
    it('passes on score to appropriate frame when instructed', function() {
      spyOn(frame2, 'setPriorScore');
      onePlayerGame.passOnScore(30, frame1);
      expect(frame2.setPriorScore).toHaveBeenCalledWith(30);
    });
    xit('does not try to pass on frame 10 score', function() {
      spyOn(onePlayerGame.frame10, 'setPriorScore');
      onePlayerGame.passOnScore(30, onePlayerGame.frame10);
    });

    describe('roll', function() {
      it('results in call of processRoll on active frames', function() {
	spyOn(frame1, 'processRoll').and.returnValue(true);
	onePlayerGame.roll(10);
	expect(frame1.processRoll).toHaveBeenCalledWith(10);
      });
    });
	
	
      
  });
}());
