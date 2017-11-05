'use strict';

describe('Game', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  })

  describe('frames', function () {
    
    it('returns the current frames played so far', function () {
      game.bowl(7);
      game.bowl(2);
      expect(game.playedFrames()).toEqual(jasmine.arrayContaining([Object({ _pins: 1, _bowls: [7, 2] })]));
    })

  });

  describe('bowl', function () {
    
    it('knocks down some pins', function () {
      game.bowl(7);
      expect(game.currentFrame().pinsRemaining()).toEqual(3);
    });

  });

  describe('score', function () {

    describe('returns the curent score', function () {

      describe('after the first bowl', function () {
        it('returns nothing', function () {
          game.bowl(6);
          expect(game.totalScore()).toEqual(0);
        });
      });
      describe('after the second bowl', function () {
        it('returns the correct score', function () {
          game.bowl(6);
          game.bowl(3);
          expect(game.totalScore()).toEqual(9);
        });
      });
      describe('after a spare', function () {
        it('returns the correct score', function () {
          game.bowl(6);
          game.bowl(4);
          game.bowl(4);
          expect(game.totalScore()).toEqual(14);
        });
      });
      describe('after a strike', function () {
        it('returns the correct score', function () {
          game.bowl(10);
          game.bowl(4);
          game.bowl(4);
          expect(game.totalScore()).toEqual(26);
        });
      });

    });

  });
  
  describe('isComplete', function () {
    
    it('throws an error if another bowl is attempted', function () {
      for (var i = 0; i < 10; i++) {
        game.bowl(4);
        game.bowl(3);
      };
      expect(function () { game.bowl(4) }).toThrowError('Game has been completed')
    });
    it('allows an extra bowl for a spare', function () {
      for (var i = 0; i < 9; i++) {
        game.bowl(4);
        game.bowl(3);
      };
      game.bowl(3);
      game.bowl(7);
      expect(function () { game.bowl(4) }).not.toThrowError('Game has been completed')
    });
    it('allows an extra two bowls for a strike', function () {
      for (var i = 0; i < 10; i++) {
        game.bowl(10);
      };
      game.bowl(3);
      expect(function () { game.bowl(4) }).not.toThrowError('Game has been completed')
    });
    it('wont count a new frame if the last bowl is a strike', function () {
      for (var i = 0; i < 10; i++) {
        game.bowl(10);
      };
      game.bowl(3);
      game.bowl(7);
      expect(game._frames.length).toEqual(10);
    });

  });

});
