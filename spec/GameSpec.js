describe('Game', function(){
  var game;

    beforeEach(function(){
      game = new Game();
      round = new Round();
    });

    describe('when a game starts', function(){
      it('should have 10 rounds', function(){
        expect(game.rounds).toEqual(10);
      });

      it('should call a new round', function(){


      });

      it('should remove a round when a new round is called', function(){
        game.newRound();
        expect(game.rounds).toEqual(9);

      });

      it('should save pins from round', function(){
        spyOn(Math, 'random').and.returnValue(.1);
        round.roll;
        expect(game.score).toEqual(1);

      });


    });



});