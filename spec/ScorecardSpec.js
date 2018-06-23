describe('Scorecard', function(){

  describe('.currentScore', function(){
    it('has an initial score of 0', function(){
      scorecard = new Scorecard();
      expect(scorecard.currentScore()).toEqual(0)
    });
  });

  describe('.frameScore', function(){
    describe('When user enters score below 10', function(){
      it('adds score to the total score', function(){

      });
    });

    describe('When user enters a strike', function(){
      it('it adds the bonus of next frames score', function(){

      });
    });

    describe('When user enters a spare', function(){
      it('it adds the bonus of the first pin of next game', function(){

      });
    });
  });

});
