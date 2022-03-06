const Game = require("./game");

describe("Game", () => {
  beforeEach(() => {
    game = new Game();
  });
  describe("roll", () => {
    it("returns a value of a roll", () => {
      expect(game.roll(5)).toEqual(5);
    });
  });
  describe('createFrame', () => {
    it("creates a new frame", () => {
      const frameDouble = { ball1: 5, ball2: 2, spare: false, strike: false }
      expect(game.createFrame(game.roll(5), game.roll(2))).toEqual(frameDouble);
    })
    it('has adds additional frames', () => {
      game.roll(5); game.roll(2);
      game.roll(5); game.roll(2);
      expect(game.frames.length).toEqual(2);
    })
  })

  describe('score', () => {
    it('totals the score after 2 games', () => {
      game.roll(3); game.roll(2);
      game.roll(3); game.roll(2);
      expect(game.score()).toEqual((3 + 2) + (3 + 2));
    })

    it('scores after 10 frames', () => {
      for(let i = 0; i < 20; i++){
        game.roll(2);
      }
      expect(game.score()).toEqual(40);
    })

    it('includes a bonus after a spare', () => {
      game.roll(5); game.roll(5);
      game.roll(2); game.roll(0);
      game.roll(0); game.roll(0);
      expect(game.score()).toEqual((10) + (2+0) + 2);
    })

    it('includes a bonus after a strike', () => {
      game.roll(10);
      game.roll(2); game.roll(2);
      game.roll(0); game.roll(0);
      expect(game.score()).toEqual((10) + (2+2) + (2+2));
    })

    it('checks repeated strikes', () => {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(0); game.roll(0);
      game.roll(0); game.roll(0);
      expect(game.score()).toEqual(60)
    })

    it('checks repeated spares', () => {
      game.roll(5); game.roll(5);
      game.roll(5); game.roll(5);
      game.roll(5); game.roll(5);
      game.roll(0); game.roll(0);
      game.roll(0); game.roll(0);
      expect(game.score()).toEqual(40);
    })
  })
  
});
