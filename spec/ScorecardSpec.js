describe ("Scorecard", function(){

  var scorecard

  beforeEach(function(){
    scorecard = new Scorecard();
  })

  describe (".addTurn", function(){

    it("gives my final score after the 10th frame", function(){

      for(i = 0; i <= 8; i++) {
        scorecard.addTurn(2, 3, 0);
      };
      expect(scorecard.addTurn(2, 3, 0)).toEqual(50)

    });

    it('accepts an extra 2 rolls if I get a strike', function(){
      for(i = 0; i <= 8; i++) {
        scorecard.addTurn(2, 3, 0);
      };
      expect(scorecard.addTurn(10, 3, 2)).toEqual(60)
    })

  });


  describe (".total", function(){

    it("returns the correct total after 2 turns", function(){

      scorecard.addTurn(2, 5, 0)
      scorecard.addTurn(3, 6, 0)
      expect(scorecard.total()).toEqual(16)

    });

    it('gives double for the first roll after a spare', function(){

      scorecard.addTurn(5, 5, 0)
      scorecard.addTurn(3, 2, 0)
      expect(scorecard.total()).toEqual(18)

    })

    it('gives the normal score again 2 turns after a spare', function(){

      scorecard.addTurn(5, 5, 0)
      scorecard.addTurn(4, 2, 0)
      scorecard.addTurn(3, 2, 0)
      expect(scorecard.total()).toEqual(25)

    })

    it('gives double for the next frame after a strike', function(){

      scorecard.addTurn(10, 0, 0)
      scorecard.addTurn(3, 2, 0)
      expect(scorecard.total()).toEqual(20)

    })

    it('gives the normal score again 2 turns after a strike', function(){

      scorecard.addTurn(10, 0, 0)
      scorecard.addTurn(4, 2, 0)
      scorecard.addTurn(3, 2, 0)
      expect(scorecard.total()).toEqual(27)

    })

  });

});