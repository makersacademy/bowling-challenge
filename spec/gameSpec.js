'use strict';

describe('Game', function() {
  let game

  beforeEach(function() {
    game = new Game();
    game.beginFrame();
  })

  it('begins a new frame',function() {
    expect(game.turn).toEqual(1)
  })

  it('has an empty scorecard at first', function() {
    expect(game.scorecard).toEqual([])
  })

  it('adds the users points to each respective frame', function() {
    game.throwBall(7);
    game.addToScorecard();
    expect(game.scorecard[0]).toEqual([ 7 ])
  })

  it('calculates the total score', function() {
    game.throwBall(7);
    game.throwBall(2);
    game.addToScorecard();
    game.throwBall(5);
    game.throwBall(4);
    game.addToScorecard();
    expect(game.totalPoints()).toEqual(18)
    
  })

  describe('when the player throws a strike', function() {

    beforeEach(function() {
      game.throwBall(10);
      game.addToScorecard();
      game.beginFrame();
      game.throwBall(7)
      game.throwBall(2);
      game.addToScorecard();
      game.strikeBonus();
    })

    it('adds a strike bonus', function() {
      expect(game.scorecard[0]).toEqual([10, 7, 2])
    })

    it('will not add the bonus in the 10th frame, only the base points', function() {
      for (let i = 0; i < 8; i++) {
        game.beginFrame();
      }
      game.throwBall(10);
      game.beginFrame();
      game.throwBall(7)
      expect(game.strikeBonus()).toEqual(null)
    })

  })

  describe('when the player throws a spare', function() {

    beforeEach(function() {
      game.throwBall(7);
      game.throwBall(3);
      game.addToScorecard();
      game.beginFrame();
      game.throwBall(7)
      game.throwBall(2);
      game.addToScorecard();
      game.spareBonus();
    })

    it('adds a spare bonus', function() {
      expect(game.scorecard[0]).toEqual([7, 3, 7])
    })

    it('will not add the bonus in the 10th frame, only the base points', function() {
      for (let i = 0; i < 8; i++) {
        game.beginFrame();
      }
      game.throwBall(7);
      game.throwBall(3);
      game.beginFrame();
      game.throwBall(7)
      expect(game.spareBonus()).toEqual(null)
    })

  })

  it('returns the final score at the end of the game', function() {
    for (let i = 0; i < 10; i++) {
      game.beginFrame();
      game.throwBall(1);
      game.addToScorecard();
    }
    expect(game.beginFrame()).toEqual(`end of game, you score ${game.totalPoints()}`)
  })

})