const Game = require('./Game')

const frameDoubleRollNotStrike = {
  log: () => 'some log',
}

describe('Game class', () => {
  describe('game.playFrame', () => {
    describe('plays a frame and returns the game scoresheet', () => {
      describe('with a single roll if it is a strike', () => {
        test('first roll = 10', () => {
          let game = new Game();
          expect(game.playFrame(1)).toEqual(
            [{
              frameNumber: 1,
              firstRoll: 10,
              secondRoll: null,
              score: null,
              bonus: 'strike'
            }]
          );
        });
      })
      describe('with two rolls if the first is not a strike', () => {

      })
      describe('updates the game scoresheet after every roll', () => {

      })

    })
  })

  describe('game.updateScoresheet', () => {
    describe('updates the game scoresheet based on latest frame action', () => {
      test('adds new frame and its first roll', () => {
        let game = new Game();
        expect(game.updateScoresheet(frameDoubleRollNotStrike)).toEqual(
          [frameDoubleRollNotStrike['log']]
        );
      });
    });
  });
})