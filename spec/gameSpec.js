describe('Game', () => {
  let game;
  let frame;
  let strikeFrame;
  let spareFrame;

  beforeEach(() => {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['rolls']);
    strikeFrame = jasmine.createSpyObj('strikeFrame', ['rolls', 'strike']);
    spareFrame = jasmine.createSpyObj('strikeFrame', ['rolls', 'spare']);

    frame.rolls = [{ roll: 3 }, { roll: 3 }];
    strikeFrame.rolls = [{ roll: 0 }, { roll: 10 }];
    spareFrame.rolls = [{ roll: 5 }, { roll: 5 }];
    
    strikeFrame.strike = true;
    spareFrame.spare = true;
  });

  describe('#initialize', () => {
    it('it initializes a game with no frames', () => {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#addFrame', () => {
    it('it stores Frame rolls in the Game instance', () => {
      game.addFrame(frame);

      expect(game.frames).toEqual([frame]);
    });
  });

  describe('#finalScore', () => {
    it('it calculates the total scores of the game', () => {
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
  });
});
