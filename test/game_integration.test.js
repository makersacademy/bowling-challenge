const Game = require('../lib/game');

describe('Game integration', () => {
  let game;

  beforeEach(() => {
    game = new Game;
  });

  it('initialized game', () => {
    const frames = game.frames;
    expect(frames.length).toEqual(10);
    expect(frames.every((frame) => frame.numRolls === 0)).toBe(true);
    expect(frames.every((frame) => frame.status === 'active')).toBe(true);
  });

  describe('Adding one frame', () => {
    it('first frame is complete without a strike/spare', () => {
      game.addRoll(5);
      game.addRoll(1);
      
      const frames = game.frames;
      expect(frames[0].score).toEqual(6);
      expect(frames[0].status).toEqual('completed');
      expect(frames[1].rolls).toEqual([]);
      expect(frames[1].status).toEqual('active');
    });

    it('first frame is a strike', () => {
      game.addRoll(10);
      
      const frames = game.frames;
      expect(frames[0].score).toEqual(10);
      expect(frames[0].status).toEqual('strike');
      expect(frames[1].rolls).toEqual([]);
      expect(frames[1].status).toEqual('active');
    });

    it('first frame is a spare', () => {
      game.addRoll(0);
      game.addRoll(10);
      
      const frames = game.frames;
      expect(frames[0].score).toEqual(10);
      expect(frames[0].status).toEqual('spare');
      expect(frames[1].rolls).toEqual([]);
      expect(frames[1].status).toEqual('active');
    });
  });

  describe('Two and a half frames', () => {
    it('moves from frame to frame as more rolls are added', () => {
      for (let i = 0; i < 5; i++) {
        game.addRoll(4);
      }

      const frames = game.frames;
      expect(frames[0].status).toEqual('completed');
      expect(frames[1].status).toEqual('completed');
      expect(frames[2].rolls).toEqual([4]);
      expect(frames[2].status).toEqual('active');
    });
  });

  describe('Full game', () => {
    it('gutter game has a score of zero', () => {
      for (let i = 0; i < 20; i++) {
        game.addRoll(0);
      }

      const frames = game.frames;
      expect(frames.every(frame => frame.score === 0)).toBe(true);
      expect(frames.every(frame => frame.status === 'completed')).toBe(true);
    });

    it('full game with rolls of 4', () => {
      for (let i = 0; i < 20; i++) {
        game.addRoll(4);
      }

      const frames = game.frames;
      expect(frames.every(frame => frame.score === 8)).toBe(true);
      expect(frames.every(frame => frame.status === 'completed')).toBe(true);
    });

    it('maximum game', () => {
      for (let i = 0; i < 12; i++) {
        game.addRoll(10);
      }

      const frames = game.frames;
      for (let i = 0; i < 10; i++) {
        expect(frames[i].score).toBe(30);
        expect(frames[i].status).toBe('completed')
      }
    });

    it('10 [9, 1] spares and a bonus roll', () => {
      for (let i = 0; i < 10; i++) {
        game.addRoll(9);
        game.addRoll(1);
      }
      game.addRoll(9);

      const frames = game.frames;
      for (let i = 0; i < 9; i++) {
        expect(frames[i].score).toBe(19);
        expect(frames[i].status).toBe('completed')
      }

      expect(frames[9].score).toBe(19);
    });

    it('throws error when trying to add a new roll', () => {
      for (let i = 0; i < 20; i++) {
        game.addRoll(4);
      }

      const errorMessage = 'The game is complete, cannot add any more rolls';
      expect(() => game.addRoll(4)).toThrow(errorMessage);
    });
  });

  describe('Strike bonuses', () => {
    it('adds two bonuses from the next frame', () => {
      game.addRoll(10);
      game.addRoll(0);
      game.addRoll(6);
      game.addRoll(4);

      const frames = game.frames;
      expect(frames[0].rolls).toEqual([10]);
      expect(frames[0].score).toEqual(16);
      expect(frames[0].status).toEqual('completed');
    });

    it('two strikes and a roll', () => {
      game.addRoll(10);
      game.addRoll(10);
      game.addRoll(4);

      const frames = game.frames;
      expect(frames[0].status).toEqual('completed');
      expect(frames[0].rolls).toEqual([10]);
      expect(frames[0].score).toEqual(24);

      expect(frames[1].status).toEqual('strike');
      expect(frames[1].rolls).toEqual([10]);
      expect(frames[1].score).toEqual(14);

      expect(frames[2].rolls).toEqual([4]);
      expect(frames[2].status).toEqual('active');
    });
  });

  describe('Spare bonuses', () => {
    it('adds one bonus from the next frame', () => {
      game.addRoll(9);
      game.addRoll(1);

      game.addRoll(6);
      expect(game.frames[0].rolls).toEqual([9, 1]);
      expect(game.frames[0].score).toEqual(16);
      expect(game.frames[0].status).toEqual('completed');

      game.addRoll(4);
      expect(game.frames[0].score).toEqual(16);
    });
  });
});
