describe('Game', function(){

    var game;

    beforeEach(function(){
       game = new Game();
    });

    describe('Starting a game', function(){

      it('starts the Bowling game', function(){
        expect(game.startgame).toEqual(true);
      });
      it('starts the Bowling game without a score', function(){
        expect(game.startscore).toBe(0);
      });
     });


});
