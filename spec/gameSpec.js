describe('Game', function(){

  var game
 
  describe('can correctly increment its score', function(){

    it('for ordinary rolls', function(){
      game = new Game([2,2,2,3,4,5,6,3,7,2,5,1,2,1,9,0,7,2,4,4]);
      expect(game.scoreForFrame(1)).toEqual(4);
      expect(game.scoreForFrame(2)).toEqual(9);
      expect(game.scoreForFrame(3)).toEqual(18);
      expect(game.scoreForFrame(4)).toEqual(27);
      expect(game.scoreForFrame(5)).toEqual(36);
      expect(game.scoreForFrame(6)).toEqual(42);
      expect(game.scoreForFrame(7)).toEqual(45);
      expect(game.scoreForFrame(8)).toEqual(54);
      expect(game.scoreForFrame(9)).toEqual(63);
      expect(game.scoreForFrame(10)).toEqual(71);
    });

    it('for spares', function(){
      game = new Game([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
      expect(game.scoreForFrame(1)).toEqual(15);
      expect(game.scoreForFrame(2)).toEqual(30);
      expect(game.scoreForFrame(3)).toEqual(45);
      expect(game.scoreForFrame(4)).toEqual(60);
      expect(game.scoreForFrame(5)).toEqual(75);
      expect(game.scoreForFrame(6)).toEqual(90);
      expect(game.scoreForFrame(7)).toEqual(105);
      expect(game.scoreForFrame(8)).toEqual(120);
      expect(game.scoreForFrame(9)).toEqual(135);
      expect(game.scoreForFrame(10)).toEqual(150);
    });

    it('for a perfect game', function(){
      game = new Game([10,10,10,10,10,10,10,10,10,10,10,10])
      expect(game.scoreForFrame(1)).toEqual(30);
      expect(game.scoreForFrame(2)).toEqual(60);
      expect(game.scoreForFrame(3)).toEqual(90);
      expect(game.scoreForFrame(4)).toEqual(120);
      expect(game.scoreForFrame(5)).toEqual(150);
      expect(game.scoreForFrame(6)).toEqual(180);
      expect(game.scoreForFrame(7)).toEqual(210);
      expect(game.scoreForFrame(8)).toEqual(240);
      expect(game.scoreForFrame(9)).toEqual(270);
      expect(game.scoreForFrame(10)).toEqual(300);
    });

    it('for a mix of strikes spares and normal rolls', function(){
      game = new Game([5,4,6,4,10,7,3,2,1,5,5,7,1,10,3,2,10,10,10])
      expect(game.scoreForFrame(10)).toEqual(139);
    });

  });
  
});