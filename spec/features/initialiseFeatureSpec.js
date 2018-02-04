/* eslint-env jasmine */

describe('Game feature', () => {
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
      rolls.push(8,2,3)
      game.results(rolls);

      expect(game.score()).toEqual(94);
    })

    it('returns 121 when give 7, 2 9 times and you finish with a turkey', () => {
      let rolls = []
      for(let i = 0; i < 9; i += 1) {rolls.push(7,2)}
      rolls.push(10,10,10)
      game.results(rolls);

      expect(game.score()).toEqual(111);
    })

    it('returns 100 when get a  strike, then 7, 2', () => {
      let rolls = []
      rolls.push(10);
      for(let i = 0; i < 9; i += 1) {rolls.push(7,2)}

      game.results(rolls);

      expect(game.score()).toEqual(100);
    })

    it('returns 300 when you play a perfect game', () => {
      let rolls = []
      for(let i = 0; i < 12; i += 1) {rolls.push(10)}
      game.results(rolls);
      expect(game.score()).toEqual(300);
    })

    it('returns 270 when you play a perfect game, but gutter the last two', () => {
      let rolls = []
      for(let i = 0; i < 10; i += 1) {rolls.push(10)}
      rolls.push(0,0)
      game.results(rolls);
      expect(game.score()).toEqual(270);
    })

  })
});
