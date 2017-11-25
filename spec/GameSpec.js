describe("Game", function(){

  var game;
  beforeEach(function(){
    game = new Game();
  });

  it('should equal zero when game starts', function(){
    expect(game.score()).toEqual(NaN);
  });

  it("should sum pins in frame", function(){
    game.roll(2)
    game.roll(3)
    expect(game.sumOfBallsInFrame(0)).toBe(5);
  });
});
