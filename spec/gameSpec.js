describe('game', function()
{
  
  describe('A Game',function() {
    beforeEach(function(){
    game1 = new game
  });

    it('regesters a score in the first frame', function() {
      game1.addScore(5);
      expect(game1.frames[0].total).toBe(5);
    });

    it(' will allow a user to switch to the next frame to add scores.', function() {
      game1.addScore(4);
      game1.addScore(5);
      game1.nextFrame();
      game1.addScore(6);
      game1.addScore(7);
      expect(game1.frames[0].total).toBe(9);
      expect(game1.frames[1].total).toBe(13);
    })

    it(' will add the next score of the next frame if a strike occurs', function() {
      game1.nextFrame();
      game1.addScore(10);
      game1.nextFrame();
      game1.addScore(6);
      game1.addScore(7);
      expect(game1.frames[1].total).toBe(23);
    })




  });
})