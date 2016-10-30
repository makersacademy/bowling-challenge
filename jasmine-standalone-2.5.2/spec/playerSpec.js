describe('Player', function () {
   describe('Player', function () {
      it('starts at frame 1', function () {
        var player = new Player();
        expect(player.frame).toBe(1);
      });

      it('starts at roll 1', function () {
        var player = new Player();
        expect(player.roll).toBe(0);
      });
    });
  });
