describe('BowlingGame', function (){

  describe('The Player can ', function(){
    it('have a total when rolls', function() {
      game = new BowlingGame();
      game.roll(2,3);
      expect(game.scoreTotal).toEqual(5);
    });

    it('score when hits pins', function() {
      game = new BowlingGame();
      game.roll(2,5);
      expect(game.scoreTotal).toEqual(7);
    });

    it('see the final score with spare', function(){
      game = new BowlingGame();
      game.roll(5,5);
      game.roll(1,2);
      game.roll(5,5);
      game.roll(3,4);
      game.roll(2,5);
      game.finalScore();
      expect(game.scoreFinal).toEqual(41);
    });

    it('see the final score with spare and strike', function(){
      game = new BowlingGame();
      game.roll(5,5);
      game.roll(1,2);
      game.roll(10,0);
      game.roll(3,4);
      game.roll(2,5);
      game.finalScore();
      expect(game.scoreFinal).toEqual(45);
    });

    it('see they have a Gutter Game', function(){
      game = new BowlingGame();
      game.roll(0,0);
      current = game.scoreArray.length = 10;
      expect(current).toEqual(10);
      expect(game.scoreTotal).toEqual(0);
    });

    it('see they have a Perfect Game', function(){
      game = new BowlingGame();
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.roll(10,0);
      game.finalScore();
      current = game.scoreArray.length = 13;
      expect(current).toEqual(13);
      expect(game.scoreFinal).toEqual(300);
    });

  });

  describe('After each set of rolls ', function(){
    it('current roll number changes by 2', function() {
      game = new BowlingGame();
      game.roll(2,3);
      game.roll(4,2);
      expect(game.currentRollNumber).toEqual(4);
    });

    it('check the set of pins are added to the score array', function() {
      game = new BowlingGame();
      game.roll(2,3);
      expect(game.scoreArray.length).toEqual(2);
    });
  });

});
