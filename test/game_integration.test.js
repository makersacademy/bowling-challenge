const Frame = require('../lib/frame');
const Game = require('../lib/game');

describe('Game integration', () => {
  it('initialized game', () => {
    const game = new Game();

    const frames = game.getFrames();
    expect(frames.length).toEqual(10);
    expect(frames.every((frame) => frame.getRolls().length === 0)).toBe(true);
    expect(frames.every((frame) => frame.getStatus() === 'active')).toBe(true);
  });

  describe('Adding one frame', () => {
    it('first frame is complete without a strike/spare', () => {
      const game = new Game();

      game.addRoll(5);
      game.addRoll(1);
      
      const frames = game.getFrames();
      expect(frames[0].getScore()).toEqual(6);
      expect(frames[0].getStatus()).toEqual('completed');
      expect(frames[1].getRolls()).toEqual([]);
      expect(frames[1].getStatus()).toEqual('active');
    });

    it('first frame is a strike', () => {
      const game = new Game();

      game.addRoll(10);
      
      const frames = game.getFrames();
      expect(frames[0].getScore()).toEqual(10);
      expect(frames[0].getStatus()).toEqual('strike');
      expect(frames[1].getRolls()).toEqual([]);
      expect(frames[1].getStatus()).toEqual('active');
    });

    it('first frame is a spare', () => {
      const game = new Game();

      game.addRoll(0);
      game.addRoll(10);
      
      const frames = game.getFrames();
      expect(frames[0].getScore()).toEqual(10);
      expect(frames[0].getStatus()).toEqual('spare');
      expect(frames[1].getRolls()).toEqual([]);
      expect(frames[1].getStatus()).toEqual('active');
    });
  });

  describe('Two and a half frames', () => {
    it('moves from frame to frame as more rolls are added', () => {
      const game = new Game();
      for (let i = 0; i < 5; i++) {
        game.addRoll(4);
      }

      const frames = game.getFrames();
      expect(frames[0].getStatus()).toEqual('completed');
      expect(frames[1].getStatus()).toEqual('completed');
      expect(frames[2].getRolls()).toEqual([4]);
      expect(frames[2].getStatus()).toEqual('active');
    });
  });

  describe('Full game', () => {
    it('gutter game has a score of zero', () => {
      const game = new Game();
      for (let i = 0; i < 20; i++) {
        game.addRoll(0);
      }

      const frames = game.getFrames();
      expect(frames.every(frame => frame.getScore() === 0)).toBe(true);
      expect(frames.every(frame => frame.getStatus() === 'completed')).toBe(true);
    });

    it('full game with rolls of 4', () => {
      const game = new Game();
      for (let i = 0; i < 20; i++) {
        game.addRoll(4);
      }

      const frames = game.getFrames();
      expect(frames.every(frame => frame.getScore() === 8)).toBe(true);
      expect(frames.every(frame => frame.getStatus() === 'completed')).toBe(true);
    });

    it('throws error when trying to add a new roll', () => {
      const game = new Game();
      for (let i = 0; i < 20; i++) {
        game.addRoll(4);
      }

      const errorMessage = 'The game is complete, cannot add any more rolls';
      expect(() => game.addRoll(4)).toThrow(errorMessage);
    });
  });
});
