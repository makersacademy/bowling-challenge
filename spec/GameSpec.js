describe("Game", () => {
  let game;
  beforeEach(() => {
    game = new Game();
  })
  
  it("initializes an empty game", () => {
    expect(game.frameNo).toEqual(1)
    expect(game.frames).toEqual([])
  })
})