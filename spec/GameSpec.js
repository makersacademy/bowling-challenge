describe('Game', () => {
  let game;
  let frame;

  beforeEach(() => {
    game = new Game();
    frame = new Frame();
  });

  it('begins with a frame index of 1', () => {
    expect(game.frameIndex).toEqual(1);
  });

  it('begins with first frame already stored in the frames array', () => {
    expect(game.frames[0]).toEqual(frame);
  });

  describe('nextFrame', () => {
    beforeEach(() => {
      game.nextFrame();
    });

    it('adds next frame to the frames array', () => {
      expect(game.frames[1]).toEqual(frame);
    });

    it('increases the frameIndex by 1', () => {
      expect(game.frameIndex).toEqual(2);
    });
  });

  describe('bowl', () => {
    it('bowls in the current frame', () => {
      game.bowl(7);
      expect(game.frameIndex).toEqual(1);
    });

    it('moves the frameIndex by 1 if bowl is a strike', () => {
      game.bowl(10);
      expect(game.frameIndex).toEqual(2);
    });

    it('moves to the next frame if player has bowled two normal scores', () => {
      game.bowl(3);
      game.bowl(6);
      expect(game.frameIndex).toEqual(2);
    });

    it('ends the game after 10 frames', () => {
      for (let i = 0; i < 20; i++) { game.bowl(2); }
      game.bowl(2);
      expect(game.frameIndex).toEqual(10);
    });
  });

  describe('totalScore', () => {
    const rollMany = function (pins, rolls) {
      for (let i = 0; i < rolls; i++) {
        game.bowl(pins);
      }
    };

    it('calculates total when there are no strikes or spares', () => {
      rollMany(1, 20);
      expect(game.totalScore()).toBe(20);
    });

    it('player can roll a gutter game', () => {
      rollMany(0, 20);
      expect(game.totalScore()).toBe(0);
    });

    it('player can roll a spare', () => {
      game.bowl(5);
      game.bowl(5);
      game.bowl(3);
      rollMany(0, 17);
      expect(game.totalScore()).toBe(16);
    });

    it('player can bowl a strike', () => {
      game.bowl(10);
      game.bowl(5);
      game.bowl(3);
      rollMany(0, 16);
      expect(game.totalScore()).toBe(26);
    });

    it('player can bowl a perfect game', () => {
      rollMany(10, 12);
      expect(game.totalScore()).toBe(300);
    });

    it('player can bowl a game of spares', () => {
      rollMany(5, 21);
      expect(game.totalScore()).toBe(150);
    });

    it('calculates a spare bonus', () => {
      rollMany(0, 16);
      rollMany(5, 5);
      expect(game.totalScore()).toBe(30);
    });

    it('calculates a strike bonus', () => {
      rollMany(0, 16);
      rollMany(10, 4);
      expect(game.totalScore()).toBe(60);
    });
  });
});
