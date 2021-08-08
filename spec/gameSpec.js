describe('Game', () => {
  
  let game;

  beforeEach(() => {
    game = new Game();
    frame = new Frame();
    scorecard = new Scorecard();
  });

  describe('Invalid input', () => {
    it('throws an error if player puts number higher than ten in first go', () => {
      expect(() => { game.roll(11) }).toThrowError('Invalid input, please try again.')
    })
    it('throws an error on second roll if number is higher than 10', () => {
      game.roll(5)
      expect(() => { game.roll(6) }).toThrowError('Invalid input, please try again.')
    })
  });

  describe('First roll procedure', () => {
    it('adds a frame given a strike', () => {
      game.roll(10)
      expect(game._currentFrame()).toEqual(2)
    });
    it('moves on to roll 2 with roll under 10', () => {
      game.roll(5)
      expect(game._currentFrame()).toEqual(1)
      expect(game._currentRoll()).toEqual(2)
    });
    it('adds another frame after two rolls', () => {
      game.roll(3)
      game.roll(6)
      expect(game._currentFrame()).toEqual(2)
    });
    it('adds adds another frame if there is a spare and then a strike', () => {
      game.roll(4)
      game.roll(6)
      game.roll(10)
      expect(game._currentFrame()).toEqual(3)
    });
    it('adds adds another frame if there is a spare and then a strike', () => {
      game.roll(10)
      game.roll(10)
      expect(game._currentFrame()).toEqual(3)
    });
    //this belongs in a feature test ??
    it('adds 20 to scorecard if there is a strike and previous go was strike', () => {
      game.roll(10)
      game.roll(10)
      expect(scorecard.totalScore()).toEqual(30)
    });
    it('adds 20 to scorecard if there is a strike and previous go was spare', () => {
      game.roll(5)
      game.roll(5)
      game.roll(10)
      expect(scorecard.totalScore()).toEqual(30)
    });
    it('doubles the first roll if previous go was a spare', () => {
      game.roll(5)
      game.roll(5)
      game.roll(6)
      expect(scorecard.totalScore()).toEqual(22)
    });
  });

  describe('Second Roll Procedure', () => {
    // in feature spec
    it('adds to the scorecard', () => {
      game.roll(3)
      game.roll(2)
      expect(scorecard.getFrame(1)).toEqual([3, 2])
    });
    it('doubles the frames score if previous go was a strike', () => {
      game.roll(10)
      game.roll(3)
      game.roll(4)
      expect(scorecard.totalScore()).toEqual(24)
    });
    it('adds a frame and goes back to roll one', () => {
      game.roll(4)
      game.roll(3)
      expect(game._currentFrame()).toEqual(2)
      expect(game._currentRoll()).toEqual(1)
    })
  })

});