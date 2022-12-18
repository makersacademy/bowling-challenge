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
});
