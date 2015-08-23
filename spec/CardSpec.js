describe("A card", function(){
  
  var card;

  beforeEach(function(){
    card=new Card();
  });

  describe("at initialization should", function(){
    
    it("have 20 rolls", function(){
      expect(card.totalRolls).toEqual(20);
    });

    it("have a currentRoll variable set to 1", function(){
      expect(card.currentRoll).toEqual(1);  
    });

  });

  describe("can check if a game is over", function(){
    
    it("returning true if currentRoll = totalRolls", function(){
      card.currentRoll=20
      expect(card.isGameOver()).toEqual(true);
    });

    it("returning false if currentRoll < totalRolls", function(){
      expect(card.isGameOver()).toEqual(false);
    });

  });  

  describe("can log a roll", function(){
    
    beforeEach(function(){
      preArraySize = card.scoreArray.length;
      preRoll = card.currentRoll;
      card.updateScoreArray(9);
    });

    it("which will increase the size of scoreArray by 1 after a roll of 9 or less", function(){
      expect(card.scoreArray.length).toEqual(preArraySize+1);
    });

    it("which will register pins smashed in scoreArray", function(){
      expect(card.scoreArray.pop()).toEqual(9); // is this a good test? the last element might have been set by other means. not sure.
    });

    it("which will increase the size of scoreArray by 2 after a roll of 10", function(){
      card.updateScoreArray(10);
      expect(card.scoreArray.length).toEqual(preArraySize+3);
    });

    it("which will register 10 and 0 pins smashed in scoreArray after a roll of 10", function(){
      card.updateScoreArray(10);
      expect(card.scoreArray.pop()).toEqual(0);
      expect(card.scoreArray.pop()).toEqual(10); // is this a good test? the last element might have been set by other means. not sure.
    });



    // it("and then increment the roll by 1, if 9 or less pins are smashed", function(){
    //   expect(card.currentRoll).toEqual(preRoll+1);
    // });

    // it("and then increment the roll by 2, if 10 pins are smashed", function(){
    //   card.updateScoreArray(10);
    //   expect(card.currentRoll).toEqual(preRoll+3);
    // });

  });

});
