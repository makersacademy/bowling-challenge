/* eslint-env jasmine */

describe('Game', () => {
  let game;
  let frame;

  beforeEach(() => {
    frame = Frame
    game = new Game(frame);
  });

  describe('Initialise', () => {
    it('initialises with 10 frames', () => {
      expect(game.board.length).toEqual(10);
    });
  })

  describe('Score', () => {
    it('returns 90 when give 7, 2 10 times', () => {
      let rolls = []
      for(let i = 0; i < 10; i += 1) {rolls.push(7,2)}
      game.results(rolls);

      expect(game.score()).toEqual(90);
    })

    it('returns 94 when give 7, 2 9 times and you finish with a  spare and 3', () => {
      let rolls = []
      for(let i = 0; i < 9; i += 1) {rolls.push(7,2)}
      for(let i = 0; i < 9; i += 1) {rolls.push(8,2,3)}
      game.results(rolls);

      expect(game.score()).toEqual(94);
    })
  })
});
