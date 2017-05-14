(function() {
  'use strict';
  describe('OnePlayerGame', function() {
    var OnePlayerGame = OnePlayerGameFile.OnePlayerGame;
    var onePlayerGame;
    var frame1;

    beforeEach(function() {
      onePlayerGame = new OnePlayerGame();
      frame1 = onePlayerGame.frame1;
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

    describe('roll', function() {
      it('results in call of processRoll on active frames', function() {
	spyOn(frame1, 'processRoll').and.returnValue(true);
	onePlayerGame.roll(10);
	expect(frame1.processRoll).toHaveBeenCalledWith(10);
      });
    });
	
	
      
  });
}());
