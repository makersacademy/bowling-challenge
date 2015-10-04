describe('Bowling Game', function() {

  var game

    beforeEach(function() {
      game = new Game();
    });

    it('each game has 10 frames',function() {
      expect(game.player_frames).toBe(10);
    });

});