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
      for (var i = 1; i <= 2; i++) { onePlayerGame.roll(4); }
      expect(frame2.activate).toHaveBeenCalled();
    });

    it('activates next frame after one rolls if strike', function() {
      spyOn(frame2, 'activate');
      onePlayerGame.roll(10);
      expect(frame2.activate).toHaveBeenCalled();
    });

    it('getScore returns most recent calculated score', function() {
      for (var i = 1; i <= 2; i++) { onePlayerGame.roll(4); }
      expect(onePlayerGame.getScore()).toBe(8);
      for (var j = 1; j <= 3; j++) { onePlayerGame.roll(10); }
      expect(onePlayerGame.getScore()).toBe(38);
    });

    it('has an array "frames" containing 10 objects', function() {
      expect(onePlayerGame.frames.length).toBe(10);
    });

    it('has an array "_activeFrames" initially containing 1 object', function() {
      expect(onePlayerGame._activeFrames().length).toBe(1);
    });

    it('has an activated frame1 upon creation', function() {
      expect(frame1.isActive()).toBe(true);
    });

    it('passes on score to appropriate frame when instructed', function() {
      spyOn(frame2, 'setPriorScore');
      for (var k = 1; k <= 3; k++) { onePlayerGame.roll(10); }
      expect(frame2.setPriorScore).toHaveBeenCalledWith(30);
    });

    describe('roll', function() {
      it('results in call of processRoll on active frames', function() {
	spyOn(frame1, 'processRoll').and.returnValue(true);
	onePlayerGame.roll(10);
	expect(frame1.processRoll).toHaveBeenCalledWith(10);
      });
    });
	
    it('can deactivate frame 10 and end game without error', function() {
      for (var j = 1; j <= 11; j++) { onePlayerGame.roll(10); }
      expect(function(){onePlayerGame.roll(10);}).not.toThrow();
      expect(onePlayerGame.frame10.isActive()).toBe(false);
    });
	
      
  });
}());
