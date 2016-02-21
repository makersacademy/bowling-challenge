describe('BowlingGame', function() {

    var game = new BowlingGame();

  // beforeEach(function(){
  //   var game = new BowlingGame();
  // });

  it("has a default value", function() {
    expect(game.score).toEqual(0);
  });


});
