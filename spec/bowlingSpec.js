describe("Bowling", () => {
  var game;

  beforeEach(() => {
    game = new Game();
  });

  it("should add the points to total score", () => {
    game.add(5)

    expect(game.points).toEqual(5);
  });

  it("should switch turn after calculating the points twice", () => {
    game.add(2);
    game.add(5);

    expect(game.frame).toEqual(2);
  });

  // it("should default all points to zero after being reset")
});