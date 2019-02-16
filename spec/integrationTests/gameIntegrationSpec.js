describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game()
  });

  describe('#roll', function() {

    it('should perform a roll on the correct frame', function() {
      var i;
      for (i = 0; i < 10; i++) {
        spyOn(game._frames[i], 'roll').and.callThrough();
      }
      do_one_game_with_strikes(game)

      expect(game._frames[0].roll).toHaveBeenCalledWith(10)
      expect(game._frames[1].roll).toHaveBeenCalledWith(3)
      expect(game._frames[1].roll).toHaveBeenCalledWith(4)
      expect(game._frames[2].roll).toHaveBeenCalledWith(5)
      expect(game._frames[2].roll).toHaveBeenCalledWith(1)
      expect(game._frames[3].roll).toHaveBeenCalledWith(2)
      expect(game._frames[3].roll).toHaveBeenCalledWith(3)
      expect(game._frames[4].roll).toHaveBeenCalledWith(4)
      expect(game._frames[4].roll).toHaveBeenCalledWith(5)
      expect(game._frames[5].roll).toHaveBeenCalledWith(1)
      expect(game._frames[5].roll).toHaveBeenCalledWith(2)
      expect(game._frames[6].roll).toHaveBeenCalledWith(10)
      expect(game._frames[7].roll).toHaveBeenCalledWith(10)
      expect(game._frames[8].roll).toHaveBeenCalledWith(2)
      expect(game._frames[8].roll).toHaveBeenCalledWith(3)
      expect(game._frames[9].roll).toHaveBeenCalledWith(4)
      expect(game._frames[9].roll).toHaveBeenCalledWith(5)
    });

  });

});
