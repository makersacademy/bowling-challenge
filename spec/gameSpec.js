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
      game1.addScore(6);
      game1.addScore(7);
      expect(game1.frames[0].total).toBe(9);
      expect(game1.frames[1].total).toBe(13);
    })

    it(' will add the next score of the next frame if a strike occurs', function() {
      game1.addScore(4);
      game1.addScore(5);
      game1.addScore(10);
      game1.addScore(6);
      game1.addScore(7);
      expect(game1.frames[1].total).toBe(23);
    })

    it(' two strikes in a row will add to additional points in the previoue frames',function(){
    game1.addScore(10);
    game1.addScore(10);
    game1.addScore(9);
    game1.addScore(0);
    expect(game1.frames[0].total).toBe(29);
    expect(game1.frames[1].total).toBe(19);
    expect(game1.frames[2].total).toBe(9);
  })

    it('a frame with a spare will have additional points added equal to the next ball', function(){
      game1.addScore(9);
      game1.addScore(1);
      game1.addScore(4);
      game1.addScore(3);
      expect(game1.frames[0].spare).toBe(true);
      expect(game1.frames[0].total).toBe(14);
    })

    it('once a frame is full, the next frame is automatically filled next',function(){
      game1.addScore(3);
      game1.addScore(4);
      game1.addScore(5);
      expect(game1.frames[0].total).toBe(7);
      expect(game1.frames[1].total).toBe(5);
    })

    it('a full game can be played', function(){
      game1.addScore(10);
      game1.addScore(6);
      game1.addScore(3);
      game1.addScore(7);
      game1.addScore(3);
      game1.addScore(5);
      game1.addScore(3);
      game1.addScore(9);
      game1.addScore(1);
      game1.addScore(3);
      game1.addScore(0);
      game1.addScore(0);
      game1.addScore(2);
      game1.addScore(5);
      game1.addScore(4);
      game1.addScore(10);
      game1.addScore(5);
      game1.addScore(5);
      game1.addScore(10);
      game1.totalCalc();
      expect(game1.gameTotal).toBe(128);
    })

 it('a second full game can be played', function(){
      game1.addScore(10);
      game1.addScore(6);
      game1.addScore(3);
      game1.addScore(7);
      game1.addScore(3);
      game1.addScore(5);
      game1.addScore(3);
      game1.addScore(9);
      game1.addScore(1);
      game1.addScore(3);
      game1.addScore(0);
      game1.addScore(0);
      game1.addScore(2);
      game1.addScore(5);
      game1.addScore(4);
      game1.addScore(10);
      game1.addScore(5);
      game1.addScore(4);
      game1.totalCalc();
      expect(game1.gameTotal).toBe(106);
    })







  });
})