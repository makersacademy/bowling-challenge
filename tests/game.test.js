const Game = require('../game');

describe('Game', () => {
  describe('initialisation', () => {
    it('initialises with Frame 1 Roll 1, and total score as 0', () => {
      const game = new Game();
      expect(game.getFrame()).toBe(1);
      expect(game.getRoll()).toBe(1);
      expect(game.getPinsRolled()).toStrictEqual([[], [], [], [], [], [], [], [], [], []]);
      expect(game.getTotalScore()).toBe(0);
      expect(game.getContinue()).toBe(true);
    });
  });
  describe('early phase of the game', () => {
    it('takes input and changes frame and roll number accordingly (1-1 -> 1-2)', () => {
      const game = new Game();
      game.rollPin(5);
      game.rollPin(3);
      expect(game.getFrame()).toBe(2);
      expect(game.getRoll()).toBe(1);
      expect(game.getPinsRolled()).toStrictEqual([[5, 3], [], [], [], [], [], [], [], [], []]);
    });
    it('takes input changes frame if roll 1 is a strike', () => {
      const game = new Game();
      game.rollPin(10);
      expect(game.getFrame()).toBe(2);
      expect(game.getRoll()).toBe(1);
      expect(game.getPinsRolled()).toStrictEqual([[10], [], [], [], [], [], [], [], [], []]);
    });
    it('takes inputs correctly for multiple rounds', () => {
      const game = new Game();
      game.rollPin(10);
      expect(game.getFrame()).toBe(2);
      expect(game.getRoll()).toBe(1);
      game.rollPin(10);
      expect(game.getFrame()).toBe(3);
      expect(game.getRoll()).toBe(1);
      game.rollPin(6);
      expect(game.getFrame()).toBe(3);
      expect(game.getRoll()).toBe(2);
      game.rollPin(3);
      expect(game.getFrame()).toBe(4);
      expect(game.getRoll()).toBe(1);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [6,3], [], [], [], [], [], [], []]);
    });
  });
  describe('Ending the game at the 10th Frame', () => {
    it('ends the game when no strike or spare in Frame 10', () => {
      const game = new Game();
      for (let i = 1; i <= 9; i++) {
        game.rollPin(10);
      }
      game.rollPin(1);
      game.rollPin(2);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [1, 2]]);
      expect(game.getContinue()).toBe(false);
    });
    it('does not end the game when the first two rolls of Frame 10 is a spare', () => {
      const game = new Game();
      for (let i = 1; i <= 9; i++) {
        game.rollPin(10);
      }
      game.rollPin(1);
      game.rollPin(9);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [1, 9]]);
      expect(game.getContinue()).toBe(true);
    });
    it('does not end the game when the first roll of Frame 10 is a strike', () => {
      const game = new Game();
      for (let i = 1; i <= 9; i++) {
        game.rollPin(10);
      }
      game.rollPin(10);
      game.rollPin(9);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 9]]);
      expect(game.getContinue()).toBe(true);
    });
    it('does not end the game when the first two rolls of Frame 10 are both strikes', () => {
      const game = new Game();
      for (let i = 1; i <= 9; i++) {
        game.rollPin(10);
      }
      game.rollPin(10);
      game.rollPin(10);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]]);
      expect(game.getContinue()).toBe(true);
    });
    it('ends game after 3 rolls at Frame 10 (case 1)', () => {
      const game = new Game();
      for (let i = 1; i <= 9; i++) {
        game.rollPin(10);
      }
      game.rollPin(10);
      game.rollPin(10);
      game.rollPin(10);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]);
      expect(game.getContinue()).toBe(false);
    });
    it('ends game after 3 rolls at Frame 10 (case 2)', () => {
      const game = new Game();
      for (let i = 1; i <= 9; i++) {
        game.rollPin(10);
      }
      game.rollPin(10);
      game.rollPin(10);
      game.rollPin(7);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 7]]);
      expect(game.getContinue()).toBe(false);
    });
    it('ends game after 3 rolls at Frame 10 (case 3)', () => {
      const game = new Game();
      for (let i = 1; i <= 9; i++) {
        game.rollPin(10);
      }
      game.rollPin(2);
      game.rollPin(8);
      game.rollPin(7);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [2, 8, 7]]);
      expect(game.getContinue()).toBe(false);
    });
    it('ends game after 3 rolls at Frame 10 (case 4)', () => {
      const game = new Game();
      for (let i = 1; i <= 9; i++) {
        game.rollPin(10);
      }
      game.rollPin(2);
      game.rollPin(8);
      game.rollPin(10);
      expect(game.getPinsRolled()).toStrictEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [2, 8, 10]]);
      expect(game.getContinue()).toBe(false);
    });
  });
  describe('Score calculation', () => {
    it('starts the game as 0 score', () => {
      const game = new Game();
      expect(game.getTotalScore()).toBe(0);
    });
    it('calculates score with no strike and spare', () => {
      const game = new Game();
      game.rollPin(7);
      game.rollPin(2);
      game.rollPin(5);
      game.rollPin(4);
      expect(game.getTotalScore()).toBe(18);
    })
  });
})