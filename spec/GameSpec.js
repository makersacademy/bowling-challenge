describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  })
  
  it('starts with one frame', () => {
    console.log(game);
    console.log(game.frames);
    expect(game.frames).toHaveSize(1);
  })

  describe('frames', () => {
    it('has current roll', () => {
      expect(game.frames['currentRoll']).toEqual(0)
    })
  })
})