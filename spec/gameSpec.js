'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('score starts at 0 points', function () {
    expect(game.calculateCurrentScore()).toEqual(0);
  });

  it('does not allow more than 10 frames', function () {
    for (let i = 1; i <= 10; i += 1) {
      game.addFrame([0, 0]);
    }
    game.addFrame([4, 5])

    expect(game.frames.length).toEqual(10);
  });

  describe('Game has finished', function(){
    it('returns a final score of 0 when rolling a gutter game', function() {
      for (let i = 1; i <= 10; i += 1) {
        game.addFrame([0, 0]);
      }

      expect(game.frames.length).toEqual(10);
      expect(game.calculateCurrentScore()).toEqual(0);
    });

    it('returns a final score of 20 when rolling all 1s', function() {
      for (let i = 1; i <= 10; i += 1) {
        game.addFrame([1, 1]);
      }

      expect(game.calculateCurrentScore()).toEqual(20);
    });

    it('returns a final score of 40 when rolling all 2s', function() {
      for (let i = 1; i <= 10; i += 1) {
        game.addFrame([2, 2]);
      }

      expect(game.calculateCurrentScore()).toEqual(40);
    });

    it('returns a final score of 60 when rolling all 3s', function() {
      for (let i = 1; i <= 10; i += 1) {
        game.addFrame([3, 3]);
      }

      expect(game.calculateCurrentScore()).toEqual(60);
    });

    it('returns a final score of 80 when rolling all 4s', function() {
      for (let i = 1; i <= 10; i += 1) {
        game.addFrame([4, 4]);
      }

      expect(game.calculateCurrentScore()).toEqual(80);
    });

    it('returns a final score of 150 when rolling all 5s', function() {
      for (let i = 1; i <= 9; i += 1) {
        game.addFrame([5, 5]);
      }
      game.addFrame([5, 5, 5]);

      expect(game.calculateCurrentScore()).toEqual(150);
    });

    it('returns a final score of 300 when rolling a perfect game', function() {
      for (let i = 1; i <= 9; i += 1) {
        game.addFrame([10, 0]);
      }
      game.addFrame([10, 10, 10]);

      expect(game.calculateCurrentScore()).toEqual(300);
    });
  });



  describe('Game has not finished', function(){
    it('returns a running total of 60 when rolling 5 frames of 5s', function() {
      for (let i = 1; i <= 5; i += 1) {
        game.addFrame([5, 5]);
      }

      expect(game.calculateCurrentScore()).toEqual(60);
    });

    it('returns a final score of 16 when rolling 4 frames of 2s and then a strike', function() {
      for (let i = 1; i <= 4; i += 1) {
        game.addFrame([2, 2]);
      }
      game.addFrame([10, 0])

      expect(game.calculateCurrentScore()).toEqual(16);
    });

    it('returns a final score of 30 when rolling a strike and then 4 frames of 2s', function() {
      game.addFrame([10, 0])
      for (let i = 1; i <= 4; i += 1) {
        game.addFrame([2, 2]);
      }

      expect(game.calculateCurrentScore()).toEqual(30);
    });

    it('returns a final score of 90 when rolling 5 frames of strikes', function() {
      for (let i = 1; i <= 5; i += 1) {
        game.addFrame([10, 0]);
      }

      expect(game.calculateCurrentScore()).toEqual(90);
    });

    it ('gives a total score of 114 when rolling 5s then 4s', function() {
      for (let i = 1; i <= 5; i ++) {game.addFrame([5, 5])};
      for (let i = 6; i <= 9; i ++) {game.addFrame([4, 4])};
      game.addFrame([4, 4]);

      expect(game.calculateCurrentScore()).toEqual(114);
    });

    it ('gives a total score of 159 when rolling 10s then 3s', function() {
      for (let i = 1; i <= 5; i ++) {game.addFrame([10, 0])};
      for (let i = 6; i <= 9; i ++) {game.addFrame([3, 3])};
      game.addFrame([3, 3]);

      expect(game.calculateCurrentScore()).toEqual(159);
    });

    it ('gives a total score of 123 when rolling 5s, 10s, then 3s', function() {
      for (let i = 1; i <= 3; i ++) {game.addFrame([5, 5])};
      for (let i = 4; i <= 6; i ++) {game.addFrame([10, 0])};
      for (let i = 7; i <= 10; i ++) {game.addFrame([3, 3])};

      expect(game.calculateCurrentScore()).toEqual(143);
    });
  });
});
