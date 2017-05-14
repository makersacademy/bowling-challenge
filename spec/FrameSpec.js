(function() {
  'use strict';
  describe('Frame', function() {
    var Frame = FrameFile.Frame;
    var frame;
    var game;

    beforeEach(function() {
      game = jasmine.createSpyObj('game', ['activateNextFrame']);
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

    describe('processRoll', function() {
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

      it('deactivates frame if two rolls < 10', function() {
	frame.activate();
	frame.processRoll(5);
	frame.processRoll(3);
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
      it('calls activateNextFrame on game when score reaches 10', function() {
	frame.processRoll(5);
	frame.processRoll(5);
	expect(game.activateNextFrame).toHaveBeenCalled();
      });
    });
  });
}());
