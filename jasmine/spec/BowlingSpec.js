describe('Bowling', function(){


  describe('A new bowling game has',function(){

    it('a total score of 0', function(){
      var game = new Bowling();
      expect(game.totalScore).toEqual(0);
    });
  });


});
