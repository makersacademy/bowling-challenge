describe ('bowling', function() {
let game;

  beforeEach(() => {
  game = new bowling();
  });

  it('should roll a gutter game', function() {
    for(let i=0; i<20; i++){
      game.roll(0)
    }
    expect(game.totalScore).toEqual(0);
  });

});
