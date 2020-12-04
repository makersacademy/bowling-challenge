'use strict';

describe('Game', () => {
  var frame;
  var _newFrame;
  var game;

  beforeEach(() => {
  frame = jasmine.createSpyObj('frame', ['knocked','isInPlay']);
  game = new Game(frame);
  });

  describe('constructor', () => {

    it('has property frames, with array of frame objects', () => {
      expect(game.frames()).toEqual([frame]);
    });

  });

  describe('roll', () => {

    describe('standard frame', () => {
      it('calls the knocked function on the current frame', () => {
        game.roll(3);
        expect(frame.knocked).toHaveBeenCalledWith(3);
      });

      it('adds new frame objects to the frames property appropriately', () => {
        frame.isInPlay.and.returnValue(false);
        game.roll(3);
        expect(game.frames().length).toEqual(2);
      });
    });

  });


});