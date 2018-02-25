describe('Game', () => {
  let game;
  let frame;

  beforeEach(() => {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['rolls']);
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
      frame.rolls.and.callFake(() => {
        return ([{ roll: 3 }, { roll: 3 }]);
      });

      game.addFrame(frame.rolls());

      expect(game.frames).toEqual([[{ roll: 3 }, { roll: 3 }]]);
    });
  });
});
