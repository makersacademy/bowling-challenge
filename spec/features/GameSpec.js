'use strict';

describe('Game', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  })
  
  describe('frame', function () {
    
    it('starts on the first frame', function () {
      expect(game.currentFrame()).toEqual(1);
    });
    it('moves onto next frame when complete', function () {
      game.roll(7);
      game.roll(3);
      expect(game.currentFrame()).toEqual(2);
    });

  })

  describe('pinsRemaining', function () {
    
    it('returns the remaining pins to knock down', function () {
      expect(game.pinsRemaining()).toEqual(10);
    });
  
  });

  describe('roll', function () {
    
    it('knocks down some pins', function () {
      game.roll(7);
      expect(game.pinsRemaining()).toEqual(3);
    });

  });

  describe('currentRoll', function () {

    it('returns what roll the player is currently on', function () {
      expect(game.currentRoll()).toEqual(1);
    });

  });

  describe('score', function () {

    describe('returns the curent score', function () {

      describe('after the first roll', function () {
        it('returns nothing', function () {
          game.roll(6);
          expect(game.score()).toEqual(0);
        });
      });
      describe('after the second roll', function () {
        it('returns the correct score', function () {
          game.roll(6);
          game.roll(3);
          expect(game.score()).toEqual(9);
        });
      });
      describe('after a spare', function () {
        it('returns the correct score', function () {
          game.roll(6);
          game.roll(4);
          game.roll(4);
          expect(game.score()).toEqual(14);
        });
      });
      describe('after a strike', function () {
        it('returns the correct score', function () {
          game.roll(10);
          game.roll(4);
          game.roll(4);
          expect(game.score()).toEqual(26);
        });
      });

    });

  });
  
  describe('isComplete', function () {
    
    it('throws an error if another bowl is attempted', function () {
      for (var i = 0; i < 10; i++) {
        game.roll(4);
        game.roll(3);
      };
      expect(function() { game.roll(4) }).toThrowError('Game has been completed')
    });
    it('allows an extra bowl for a spare', function () {
      for (var i = 0; i < 9; i++) {
        game.roll(4);
        game.roll(3);
      };
      game.roll(3);
      game.roll(7);
      expect(function() { game.roll(4) }).not.toThrowError('Game has been completed')
    });
    it('allows an extra two bowls for a strike', function () {
      for (var i = 0; i < 10; i++) {
        game.roll(10);
      };
      game.roll(3);
      expect(function() { game.roll(4) }).not.toThrowError('Game has been completed')
    });
    it('wont count a new frame if the last bowl is a strike', function () {
      for (var i = 0; i < 10; i++) {
        game.roll(10);
      };
      game.roll(3);
      game.roll(7);
      expect(game._frames.length).toEqual(10);
    });

  })

});
