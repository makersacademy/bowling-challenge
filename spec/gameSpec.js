describe('Game', () => {
  let game;
  let frame;
  let strikeFrame;
  let spareFrame;
  let lastFrame;
  let gutterFrame;

  beforeEach(() => {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['rolls']);
    strikeFrame = jasmine.createSpyObj('strikeFrame', ['rolls', 'strike']);
    spareFrame = jasmine.createSpyObj('spareFrame', ['rolls', 'spare']);
    lastFrame = jasmine.createSpyObj('lastFrame', ['rolls']);
    gutterFrame = jasmine.createSpyObj('gutterFrame', ['rolls']);

    frame.rolls = [{ roll: 3 }, { roll: 3 }];
    strikeFrame.rolls = [{ roll: 10 }];
    spareFrame.rolls = [{ roll: 5 }, { roll: 5 }];
    lastFrame.rolls = [{ roll: 10 }, { roll: 10 }, { roll: 10 }];
    gutterFrame.rolls = [{ roll: 0 }, { roll: 0 }];

    strikeFrame.strike = true;
    spareFrame.spare = true;
  });

  describe('#addFrame', () => {
    it('it stores Frame rolls in the Game instance', () => {
      game.addFrame(frame);

      expect(game.frames).toEqual([frame]);
    });
  });

  describe('#finalScore', () => {
    it('it calculates the total scores of the game with no bonuses', () => {
      for (let i = 0; i < 10; i++) {
        game.addFrame(frame);
      }

      expect(game.finalScore()).toEqual(60);
    });

    it('it adds the right bonus to previous frame after strike is scored', () => {
      game.addFrame(strikeFrame);
      game.addFrame(frame);

      expect(game.finalScore()).toEqual(22);
    });

    it('it adds the right bonus to previous frame after spare is scored', () => {
      game.addFrame(spareFrame);
      game.addFrame(frame);

      expect(game.finalScore()).toEqual(19);
    });

    it('it adds the bonus of 3rd roll in 10th frame', () => {
      game.addFrame(lastFrame);

      expect(game.finalScore()).toEqual(30);
    });

    it('it calculates the score of a perfect game', () => {
      for (let i = 0; i < 9; i++) {
        game.addFrame(strikeFrame);
      }
      game.addFrame(lastFrame);

      expect(game.finalScore()).toEqual(300);
    });

    it('it calculates the score of a gutter game', () => {
      for (let i = 0; i < 10; i++) {
        game.addFrame(gutterFrame);
      }

      expect(game.finalScore()).toEqual(0);
    });
  });
});
