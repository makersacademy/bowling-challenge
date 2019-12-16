describe("Bowling", () => {
  var game;

  beforeEach(() => {
    game = new Game();
  });

  it("should add the points to total score", () => {
    game.add(5)

    expect(game.totalPoints).toEqual(5);
  });

  it("should switch turn after calculating the points twice", () => {
    game.add(2);
    game.add(5);

    expect(game.frame).toEqual(2);
  });

  it("should default all points to zero and frame & roll back to one after being reset", () => {
    game.reset();

    expect(game.totalPoints).toEqual(0);
    expect(game.framePoints).toEqual(0);
    expect(game.frame).toEqual(1);
    expect(game.roll).toEqual(1);
  });

  it("should change your roll to 2 after entering a score", () => {
    game.add(6);

    expect(game.roll).toEqual(2);
  });

  it("should set frame to 2 after scoring a strike(10)", () =>{
    game.add(10);

    expect(game.frame).toEqual(2);
  });

  it("should set frame points to 0 if in a new frame", () =>{
    game.add(10);

    expect(game.framePoints).toEqual(0);
  });
});