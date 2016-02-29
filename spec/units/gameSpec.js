'use strict';

describe('Game', function () {
  var game, frameMock, lastFrameMock;

  beforeEach(function () {
    frameMock = jasmine.createSpyObj('frameMock', [
                                                    'isComplete',
                                                    'roll',
                                                    'getRoll',
                                                    'getScore'
                                                  ]);
    lastFrameMock= jasmine.createSpyObj('lastFrameMock', [
                                                          'isComplete',
                                                          'roll',
                                                          'getRoll',
                                                          'getScore'
                                                        ]);
    function mockFrameKlass() {
      return frameMock;
    }

    function mockLastFrameKlass() {
      return lastFrameMock;
    }

    game = new Game(mockFrameKlass, mockLastFrameKlass);
  });

  describe('#roll', function () {
    it('calls #roll on the current frame', function () {
      game.roll(5);
      expect(frameMock.roll).toHaveBeenCalled();
    });

    it('initializes a last frame on roll 10', function () {
      frameMock.isComplete.and.returnValue(true);
      this.rollMany.call(game, 10, 10);

      expect(lastFrameMock.roll).toHaveBeenCalled();
    });

    describe('if passed an non-number value', function () {
      it('throws an exception', function () {
        var invalidRoll = function () {
          game.roll('invalid');
        };
        expect(invalidRoll).toThrowError('Invalid roll');
      });
    });

    describe('if passed a negative value', function () {
      it('throws an exception', function () {
        var invalidRoll = function () {
          game.roll(-4);
        };
        expect(invalidRoll).toThrowError('Invalid roll');
      });
    });
  });

  describe('#calculateScore', function () {
    it('calls #getScore on frames', function () {
      game.roll(5);
      game.calculateScore();
      expect(frameMock.getScore).toHaveBeenCalled();
    });
  });
});
