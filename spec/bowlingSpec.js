describe("Bowling", function(){

  it("should add the points to total score", function(){
    var game = new Game();
    game.add(5)

    expect(game.points).toEqual(5);
  });
});