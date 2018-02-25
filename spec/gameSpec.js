describe('Game', () => {
  let game;
  let frame;

  beforeEach(() => {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['rolls']);

    // frame.rolls([{ roll: 3 }, { roll: 3 }]);

    frame.rolls.and.callFake(() => {
      return [{ roll: 3 }, { roll: 3 }];
    });
  });

  describe('#initialize', () => {
    it('it initializes a game with no frames', () => {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#addFrame', () => {
    it('it stores a Frame object in the Game instance', () => {
      game.addFrame(frame);

      expect(game.frames).toEqual([[{ roll: 3 }, { roll: 3 }]]);
    });

    // it('tracks that the frame spy receives correct argument', () => {
    //   expect(frame.rolls).toHaveBeenCalledWith([{ roll: 3 }, { roll: 3 }]);
    // });
  });
});
