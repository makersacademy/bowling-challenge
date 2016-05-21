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
        expect(game.newRound).toEqual('Round({ MAX_BALLS: 2, PINS: 10, balls: 2, roundScore: [  ] })');

      });

      it('should remove a round when a new round is called', function(){
        game.newRound();
        expect(game.rounds).toEqual(9);

      });
      it('has an empty array', function(){
        expect(game.score).toEqual([]);
      });


      it('should save a round score when it calls a new one', function(){
          spyOn(Math, 'random').and.returnValue(.4);
        round.roll();
        round.roll();
        game.newRound();
        expect(game.score).toEqual([[4,4]])

      });


    });



});