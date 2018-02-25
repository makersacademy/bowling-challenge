describe('Game', () => {
  let game;
  let frame;

  beforeEach(() => {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['rolls']);

    frame.rolls.and.callFake(() => ([{ roll: 3 }, { roll: 3 }]));
  });

  describe('#initialize', () => {
    it('it initializes a game with no frames', () => {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#addFrame', () => {
    // This is not the whole object... just the rolls of the object
    // This is like passing frame.rolls though, but 'expected' behaviour
    it('it stores Frame rolls in the Game instance', () => {
      game.addFrame(frame.rolls());

      expect(game.frames).toEqual([[{ roll: 3 }, { roll: 3 }]]);
    });
  });

  describe('#finalScore', () => {
    it('it calculates the total scores of the game', () => {
      for (let i = 0; i < 10; i++) {
        game.addFrame(frame.rolls());
      }

      expect(game.finalScore(game.frames)).toEqual(60);
    });
  });
});
