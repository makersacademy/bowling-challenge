const Game = require('../src/game');

describe('bowling game', () => {
  const game = new Game();
  
  describe ('rolls and frames', () => { 
    it ('starts the score with an empty array', () => {
      expect(game.getScore()).toBeEmpty;
    })

    it ('stores the first frame scores', () => {
      game.rollPins(4)
      game.rollPins(4)
      expect(game.getScore()[0]).toEqual([4, 4]);
    })

    it ('starts a new frame after 2 rolls', () => {
      game.rollPins(4)
      game.rollPins(4)
      expect(game.getScore().length).toBe(2);
    })

    it ('calclates the total score during the game', () => {
      expect(game.totalScore()).toEqual(16);
    })
  })

  describe ('strike', () => { 
    it ('finishes the frame after a strike', () => {
      game.rollPins(10)
      game.rollPins(4)
      expect(game.getScore().length).toBe(3);
    })

    it ('calculates strike bonus correctly', () => {
      game.rollPins(4)
      expect(game.getScore()[2]).toEqual([18]);
    })
  })
  
  describe ('spare', () => { 
    it ('calculates spare bonus correctly', () => {
      game.rollPins(6)
      for(let i = 0; i <= 3; i++) game.rollPins(4)
      expect(game.getScore()[4]).toEqual([6, 8]);
    })
  })

  describe ('end game', () => {
    it('finishes the game if there are no bonus rolls', () => {
      const regularGame = new Game
      for(let i = 0; i <= 20; i++) regularGame.rollPins(4)
      regularGame.rollPins(111)
      expect(regularGame.getScore().length).toBe(10)
      expect(regularGame.getScore()[9]).toEqual([4, 4]);
    })

    it('gives an additional roll if the 10th frame was a spare', () => {
      const spareGame = new Game
      for(let i = 0; i <= 18; i++) spareGame.rollPins(4)
      spareGame.rollPins(6)
      spareGame.rollPins(8)
      expect(spareGame.getScore().length).toBe(10)
      expect(spareGame.getScore()[9]).toEqual([4, 6, 8]);
    })

    it('gives an additional roll if the 10th frame was a strike', () => {
      const strikeGame = new Game
      for(let i = 0; i <= 17; i++) strikeGame.rollPins(4)
      strikeGame.rollPins(10)
      strikeGame.rollPins(8)
      expect(strikeGame.getScore().length).toBe(10)
      expect(strikeGame.getScore()[9]).toEqual([10, 8]);
    })

    it('gives an additional roll if the 10th frame bonus roll was a strike too', () => {
      const doubleStrikeGame = new Game
      for(let i = 0; i <= 17; i++) doubleStrikeGame.rollPins(4)
      for(let i = 0; i <= 3; i++) doubleStrikeGame.rollPins(10)
      expect(doubleStrikeGame.getScore().length).toBe(10)
      expect(doubleStrikeGame.getScore()[9]).toEqual([10, 10, 10]);
    })

    it('does not give any more addition bonus rolls', () => {
      const tripleStrikeGame = new Game
      for(let i = 0; i <= 17; i++) tripleStrikeGame.rollPins(4)
      for(let i = 0; i <= 9; i++) tripleStrikeGame.rollPins(10)
      expect(tripleStrikeGame.getScore().length).toBe(10);
      expect(tripleStrikeGame.getScore()[9].length).toBe(3);
    })

    it('does not create any more frames after the 10th one', () => {
      for(let i = 0; i < 99; i++) game.rollPins(4)
      expect(game.getScore().length).toBe(10);
    })

    it('calculates the total score', () => {
      expect(game.totalScore()).toBe(96);
    })
  })
})
