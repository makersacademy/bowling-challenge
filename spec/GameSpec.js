
describe('Game', function()
  {
    var game;

    beforeEach(function()
      {
        game = new Game();
      }
    )

    it('scores a gutter game', function()
      {
        for( frame = 1; frame <= 20; frame++ )
          {
            game.hit(0);
          }
        expect( game.getTotal() ).toEqual(0);
      }
    )

    it('scores a non gutter game', function()
      {
        for( frame = 1; frame <= 20; frame++ )
          {
            game.hit(1);
          }
        expect( game.getTotal() ).toEqual(20);
      }
    )

  }
)
