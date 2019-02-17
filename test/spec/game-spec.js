(function () {
  'use strict';

  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe('When the game is created', function () {
    it('has default frames const', function () {
      expect(game.DEFAULT_FRAMES.length).toEqual(10);
    });

    it('has frames equal to the default frames', function () {
      expect(game.frames).toEqual(game.DEFAULT_FRAMES)
    })

    it('has current frame of 1', function () {
      expect(game.currentFrame).toEqual(1)
    })

    it('has current bowl of 1', function () {
      expect(game.currentBowl).toEqual(1)
    })

    it('has a total of zero', function () {
      expect(game.total).toEqual(0)
    })

    it('stores all of the bowls', function () {
      expect(game.allBowls).toEqual([])
    })
  })

  describe('When playing the game', function () {
    beforeEach(function () {
      game.addBowl(6)
    })
    it('adds first bowl to first frame', function () {
      expect(game.allBowls).toContain(6)
      expect(game.frames[0]).toEqual([6])
      expect(game.currentBowl).toEqual(2)
    })

    it('adds second bowl to first frame, and moves the frame on', function () {
      game.addBowl(3);
      expect(game.frames[0]).toEqual([6, 3])
      expect(game.currentBowl).toEqual(1)
      expect(game.currentFrame).toEqual(2)
    })

    it('adds the third bowl to the second frame', function () {
      game.addBowl(3);
      game.addBowl(4);
      expect(game.frames[1]).toEqual([4])
    })
  })

  describe('Different games', function () {
    it('can bowl a gutter game', function () {
      for (var i = 0; i < 20; i++) {
        game.addBowl(0)
      }
      expect(game.total).toEqual(0);
    })

    it('can bowl all 1s', function () {
      for (var i = 0; i < 20; i++) {
        game.addBowl(1)
      }
      expect(game.total).toEqual(20)
      expect(game.calculateTotal()).toEqual(20)
    })
  })
})();
