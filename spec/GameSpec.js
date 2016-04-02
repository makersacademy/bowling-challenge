
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
        for( roll = 1; roll <= 20; roll++ )
          {
            game.hit(0);
          }
        expect( game.getTotal() ).toEqual(0);
      }
    )

    it('scores a non gutter game', function()
      {
        for( roll = 1; roll <= 20; roll++ )
          {
            game.hit(1);
          }
        expect( game.getTotal() ).toEqual(20);
      }
    )

    it('scores a spare', function()
      {
        game.hit(9);
        game.hit(1);
        game.hit(8);
        for( roll = 1; roll <= 17; roll++ )
          {
            game.hit(0);
          }
        expect( game.getTotal() ).toEqual(26);
      }
    )


  }
)
