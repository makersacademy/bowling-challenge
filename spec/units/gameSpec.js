'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('initializes with an empty frames array', function() {
    expect(game.frames).toEqual([])
  });

  describe('#input_bowl, rolls 1-9', function() {
      it('returns pins with input_bowl method', function() {
        expect(game.input_bowl(2)).toBe(2);
      });

      it('creates a Frame and adds it to frames array', function() {
        game.input_bowl(2);
        expect(game.frames.length).toBe(1);
      });

      it('saves pins and adds to score', function() {
        game.input_bowl(2);
        game.input_bowl(7);
        game.calculateScore();
        expect(game.score).toBe(9);
      })

      it('initializes a new Frame after two rolls', function() {
        game.input_bowl(2);
        game.input_bowl(7);
        expect(game.frames.length).toBe(1);
        game.input_bowl(7);
        expect(game.frames.length).toBe(2);
      })

      it('initializes a new Frame after a strike', function() {
        game.input_bowl(10);
        expect(game.frames.length).toBe(1);
        game.input_bowl(7);
        expect(game.frames.length).toBe(2);
      })
  });

  describe('roll 10', function() {
    it('straight game stops after 10 rolls', function() {
      for ( let i = 0; i < 20; i++ ) {
        game.input_bowl(2);
      }
      expect(game.frames.length).toEqual(10);
      expect(game.isOver()).toBe(true);
    })

    it('allows third roll if spare', function() {
      for ( let i = 0; i < 19; i++ ) {
        game.input_bowl(2);
      }
      game.input_bowl(8);
      expect(game.frames.length).toEqual(10);
      expect(game.isOver()).toBe(false);
    })

    it('allows second and third roll if strike', function() {
      for ( let i = 0; i < 18; i++ ) {
        game.input_bowl(2);
      }
      game.input_bowl(10);
      expect(game.frames.length).toEqual(10);
      expect(game.isOver()).toBe(false);
      game.input_bowl(10);
      expect(game.frames.length).toEqual(10);
      expect(game.isOver()).toBe(false);
      game.input_bowl(10);
      expect(game.frames.length).toEqual(10);
      expect(game.isOver()).toBe(true);
    })
  })

  describe('end of game', function() {
    it('prevents more rolls and says game over', function() {
      for ( let i = 0; i < 20; i++ ) {
        game.input_bowl(2);
      }
      console.log = jasmine.createSpy("log");
      game.input_bowl(2);
      expect(console.log).toHaveBeenCalledWith("Game over!");
      expect(game.frames.length).toEqual(10);
    })
  })

  describe('calculating bonuses', function() {
    it('strikes open bonus class status 2', function() {
      game.input_bowl(10);
      game.input_bowl(2);
      expect(game.bonuses.length).toEqual(1);
      expect(game.bonuses[0].status).toEqual(1);
    })

    it('spares open bonus class status 1', function() {
      game.input_bowl(8);
      game.input_bowl(2);
      game.input_bowl(2);
      expect(game.bonuses.length).toBe(1);
      expect(game.bonuses[0].status).toBe(0);
      game.calculateScore();
      expect(game.score).toBe(14)
    })
  })
})
