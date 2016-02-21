describe('Features Spec', function(){

  describe('User Story 1:', function(){
    it('Can record a complete Gutter Game', function(){
      var game = new Bowling();
      for (var i = 1; i < 11; i++){
        game.writeFrameOne(0);
        game.writeFrameTwo(0);
      };
      expect(game.totalScore).toEqual(0);
      expect(game.isFinished()).toEqual(true); 
    }); 
  });

  describe('User Story 2:', function(){
    it('Can record a single frame', function(){
      var game = new Bowling();
      game.writeFrameOne(5);
      game.writeFrameTwo(2);
      expect(game.totalScore).toEqual(7);
    }); 
  });
});
