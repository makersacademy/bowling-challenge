describe('Game',function(){
  beforeEach(function(){
    game = new Game();
    strike = 10;
  })

  it('if user does strike the score is changed by 10',function(){
    game.firstTurn('strike');
    expect(game.score).toEqual(30);
  })
})
