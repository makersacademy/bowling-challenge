'use strict';

describe('Game', function() {
  var game, player;
  beforeEach(function() {
    player = jasmine.createSpyObj('player', ['bowl', 'scoreCard', 'isRoundOver', 'isFinished'])
    game = new Game(player);
  });
  it('game starts at round 0', function() {
    expect(game.round).toEqual(0);
  });
  describe('Play', function() {
    beforeEach(function() {
      player.isRoundOver.and.returnValue(true);
      game.play(10, 0);
    })
    it('instructs player to bowl', function() {
      expect(player.bowl).toHaveBeenCalledWith(10, 0);
    });
    it('moves to next round if round is over', function() {
      expect(game.round).toEqual(1);
    });
  });
  describe('is round over', function() {
    it('asks player if the round is over', function() {
      game.isRoundOver();
      expect(player.isRoundOver).toHaveBeenCalled();
    });
  });
  describe('game over', function() {
    beforeEach(function() {
      player.isFinished.and.returnValue(true);
    });
    it('asks player if they are finished', function() {
      game.isOver();
      expect(player.isFinished).toHaveBeenCalled();
    });
    it('ends the game', function() {
      game.play(10, 9);
      expect(game.over).toEqual(true);
    });
  });
});
