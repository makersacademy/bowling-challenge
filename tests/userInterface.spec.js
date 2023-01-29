const { default: expect } = require('expect');
const readlineSync = require('readline-sync');
const UserInterface = require('../lib/userInterface');

jest.mock('readline-sync');

describe('UserInterface', () => {
  let game, ui;

  beforeEach(() => {
    game = { frameCount: 1 };
    ui = new UserInterface(game);
  });
  describe('getRollOne', () => {
    it('should return a valid roll one', () => {
      readlineSync.question.mockReturnValueOnce('5');
      const rollOne = ui.getRollOne();
      expect(rollOne).toBe(5);
    });
  });

  describe('getRollTwo', () => {
    it('should return a valid roll two', () => {
      readlineSync.question.mockReturnValueOnce('5');
      ui.getRollOne();
      readlineSync.question.mockReturnValueOnce('5');
      const rollTwo = ui.getRollTwo();
      expect(rollTwo).toBe(5);
    });
    it('should return zero if rollOne is 10 and it is not the final frame', () => {
      game = { frameCount: 5 };
      ui = new UserInterface(game);
      readlineSync.question.mockReturnValueOnce('10');
      ui.getRollOne();
      const rollTwo = ui.getRollTwo();
      expect(rollTwo).toBe(0);
    });
    it('should allow another roll if first roll is not a strike', () => {
      game = { frameCount: 5 };
      ui = new UserInterface(game);
      readlineSync.question.mockReturnValueOnce('4');
      ui.getRollOne();
      readlineSync.question.mockReturnValueOnce('5');
      const rollTwo = ui.getRollTwo();
      expect(rollTwo).toBe(5);
    });
    it('should allow the user a second roll if the first roll of frame 10 is a strike', () => {
      game = { frameCount: 10 };
      ui = new UserInterface(game);
      readlineSync.question.mockReturnValueOnce('10');
      ui.getRollOne();
      readlineSync.question.mockReturnValueOnce('10');
      const rollTwo = ui.getRollTwo();
      expect(rollTwo).toBe(10);
    });
    it('should return an error if maximum pins exceeded', () => {
      console.log = jest.fn();
      readlineSync.question.mockReturnValueOnce('6');
      ui.getRollOne();
      readlineSync.question.mockReturnValueOnce('6');
      ui.getRollTwo();
      expect(console.log.mock.calls[0][0]).toContain(
        'Invalid input. You have 4 remaining.'
      );
    });
  });

  describe('getRollThree', () => {
    it('should return a valid roll three if roll one of frame 10 is a strike', () => {
      game = { frameCount: 10 };
      ui = new UserInterface(game);
      readlineSync.question.mockReturnValue('10');
      ui.getRollOne();
      readlineSync.question.mockReturnValueOnce('10');
      ui.getRollTwo();
      readlineSync.question.mockReturnValueOnce('10');
      const rollThree = ui.getRollThree();
      expect(rollThree).toBe(10);
    });
    it('should return a valid roll three if rollOne and rollTwo of frame 10 make a spare', () => {
      game = { frameCount: 10 };
      ui = new UserInterface(game);
      readlineSync.question.mockReturnValueOnce('5');
      ui.getRollOne();
      readlineSync.question.mockReturnValueOnce('5');
      ui.getRollTwo();
      readlineSync.question.mockReturnValueOnce('10');
      const rollThree = ui.getRollThree();
      expect(rollThree).toBe(10);
    });
    it('should return zero if rollOne and rollTwo of frame 10 are an open frame', () => {
      game = { frameCount: 10 };
      ui = new UserInterface(game);
      readlineSync.question.mockReturnValueOnce('5');
      ui.getRollOne();
      readlineSync.question.mockReturnValueOnce('4');
      ui.getRollTwo();
      const rollThree = ui.getRollThree();
      expect(rollThree).toBe(0);
    });

    it('should always return zero for frames 1-9', () => {
      game = { frameCount: 1 };
      ui = new UserInterface(game);
      ui.getRollThree();
      expect(ui.rollThree).toBe(0);

      ui.game.frameCount = 2;
      ui.getRollThree();
      expect(ui.rollThree).toBe(0);

      ui.game.frameCount = 9;
      ui.getRollThree();
      expect(ui.rollThree).toBe(0);
    });
  });
});
