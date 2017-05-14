(function() {
  'use strict';
  describe('Frame', function() {
    var Frame = FrameFile.Frame;
    var frame;
    var game;

    beforeEach(function() {
      game = jasmine.createSpyObj('game', ['activateNextFrame', 'passOnScore']);
      frame = new Frame(game);
    });

    it('is inactive upon creation', function() {
      expect(frame.isActive()).toBe(false);
    });

    it('has an activate method that renders frame active', function() {
      frame.activate();
      expect(frame.isActive()).toBe(true);
    });

    it('has a deactivate method', function() {
      frame.activate();
      frame.deactivate();
      expect(frame.isActive()).toBe(false);
    });

    it('has a setter method for prior score', function() {
      expect(frame.setPriorScore()).toBeUndefined();
    });

    describe('totalScore', function() {
      beforeEach(function() {
	frame.setPriorScore(20);
	frame.processRoll(10);
	frame.processRoll(10);
      });

      it('returns null when unavailable', function() {
	expect(frame.totalScore()).toBe(null);
      });

      it('returns total score when available', function() {
	frame.processRoll(10);
	expect(frame.totalScore()).toBe(50);
      });
    });

    describe('processRoll', function() {
      it('tells game to pass on score to next frame when it is available', function() {
	frame.setPriorScore(20);
	frame.processRoll(10);
	frame.processRoll(10);
	frame.processRoll(10);
	expect(game.passOnScore).toHaveBeenCalledWith(frame.totalScore(), frame);
      });
      it('updates box variables with scores', function() {
	frame.processRoll(5);
	expect(frame.box1()).toBe(5);
	frame.processRoll(3);
	expect(frame.box2()).toBe(3);
      });
      it('updates box variables with a spare', function() {
	frame.processRoll(5);
	expect(frame.box1()).toBe(5);
	frame.processRoll(5);
	expect(frame.box2()).toBe('/');
      });
      it('updates box variables with a strike', function() {
	frame.processRoll(10);
	expect(frame.box1()).toBe('X');
	frame.processRoll(5);
	expect(frame.box2()).toBe(null);
      });
      it('correctly handles box variables for tenth frame', function() {
	var frame10 = new Frame(game, true); 
	for (var i = 1; i <= 3; i++) { frame10.processRoll(10); }
	expect(frame10.box1()).toBe('X');
	expect(frame10.frame10Box2()).toBe('X');
	expect(frame10.frame10Box3()).toBe('X');
      });
	  

      it('deactivates frame if two rolls < 10', function() {
	frame.activate();
	frame.processRoll(0);
	frame.processRoll(0);
	expect(frame.isActive()).toBe(false);
      });
      it('deactivates frame after three rolls if first 2 >= 10', function() {
	frame.activate();
	frame.processRoll(5);
	frame.processRoll(5);
	expect(frame.isActive()).toBe(true);
	frame.processRoll(5);
	expect(frame.isActive()).toBe(false);
      });
      it('calls activateNextFrame on game when strike', function() {
	frame.processRoll(10);
	expect(game.activateNextFrame).toHaveBeenCalled();
      });
      it('calls activateNextFrame on game after two rolls', function() {
	frame.processRoll(0);
	frame.processRoll(0);
	expect(game.activateNextFrame).toHaveBeenCalled();
      });
    });
  });
}());
