describe("Scorecard", function() {
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('frame', function(){
    it ('starts at 1', function(){
      expect(scorecard.frame).toEqual(1);
    });

    it ('can be advanced', function(){
      scorecard.roll(3,4);
      expect(scorecard.frame).toEqual(2);
    });

    it ('does not exceed 11 frames', function(){
      console.log = jasmine.createSpy("log");
      var times;
      for ( times = 0; times < 12; times ++){
        scorecard.roll(3,4);
      }
       scorecard.roll(3,4);
       expect(console.log).toHaveBeenCalledWith("Game over.");
    });
  });

  describe('nextFrame', function(){
    it ('can go to the next frame', function(){
      scorecard.frame = 5
      scorecard.nextFrame()
      expect(scorecard.frame).toEqual(6);
    });
  });

  describe('pins', function(){
    it ('starts at 0', function(){
      expect(scorecard.pins).toEqual(0);
    });
  });

  describe('total', function(){
    it ('starts at 0', function(){
      expect(scorecard.total).toEqual(0);
      });

      it ('adds up the score for each roll', function(){
        scorecard.roll(4,4);
        scorecard.roll(2,7);
        expect(scorecard.total).toEqual(17);
      });
    });

  describe('roll', function(){
    it ('takes in data', function(){
      scorecard.roll(4,4);
      expect(scorecard.total).toEqual(8);
    });

    it ('returns strikes', function(){
     console.log = jasmine.createSpy("log");
     scorecard.roll(10,0);
     expect(console.log).toHaveBeenCalledWith('Strike!');
    });

    it ('returns spares', function(){
      console.log = jasmine.createSpy("log");
      scorecard.roll(8,2);
      expect(console.log).toHaveBeenCalledWith('Spare!');
      });
    });

  describe('reset', function(){
    it('resets the roll and pins', function(){
      scorecard.pins =10
      scorecard.roll = 2
      scorecard.reset()
      expect(scorecard.pins).toEqual(0);
    });
  });

  describe('addTotal', function(){
    it ('adds number of pins knocked down to total', function(){
      scorecard.total = 5
      scorecard.pins = 6
      scorecard.addTotal();
      expect(scorecard.total).toEqual(11);
    });
  }); 

  describe('pinsPerRoll', function(){
    it ('initializes with an empty array', function(){
      expect(scorecard.pinsPerRoll).toEqual([]);
    });
    it ('records the value of each roll', function(){
      scorecard.roll(4,5)
      scorecard.roll(10,0)
      expect(scorecard.pinsPerRoll).toEqual([4,5,10]);
    });

  });

  describe('gameOver', function(){

    beforeEach(function(){
      console.log = jasmine.createSpy("log");
      scorecard.frame = 10
    });

    it ('identifies a gutter game', function(){
      scorecard.frame =11;
      scorecard.gameOver();
      expect(console.log).toHaveBeenCalledWith('You scored 0 points. Gutter game!')
    });
 
  it ('identifies a perfect game', function(){
    scorecard.frame =12;
    scorecard.total = 300;
    scorecard.gameOver();
    expect(console.log).toHaveBeenCalledWith('You scored 300 points. Perfect game!');
    });
   
  it ('identifies the overall score of a game', function(){
    scorecard.frame =12;
      scorecard.total = 150
      scorecard.gameOver();
    expect(console.log).toHaveBeenCalledWith('You scored 150 points. Good game!');
    });
  }); 
});
