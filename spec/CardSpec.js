describe("A card", function(){
  
  var card;

  beforeEach(function(){
    card = new Card();
  });

  describe("at initialization should", function(){
    
    it("have 20 rolls", function(){
      expect(card.totalRolls).toEqual(20);
    });

  });

  describe("can check if a game is over", function(){
    
    it("returning true if score array size = totalRolls", function(){
      for (i = 0; i < 20; i++) { card.updateScoreArray(3); };
      expect(card.isGameOver()).toEqual(true);
    });

    it("returning false if score array size < totalRolls", function(){
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
      expect(card.scoreArray.pop()).toEqual(9);
    });

    it("which will increase the size of scoreArray by 2 after a roll of 10 on first roll", function(){
      card.updateScoreArray(9);
      card.updateScoreArray(10);
      expect(card.scoreArray.length).toEqual(preArraySize+4);
    });

    it("which will register 10 and X pins smashed in scoreArray after a roll of 10", function(){
      card.updateScoreArray(9);
      card.updateScoreArray(10);
      expect(card.scoreArray.pop()).toEqual('X');
      expect(card.scoreArray.pop()).toEqual(10); 
    });

  });

describe("can update total rolls", function(){

      it("by increasing them to 24 if roll 19 is a strike", function(){
        for (i = 0; i < 18; i++) { card.updateScoreArray(1); }
        card.updateScoreArray(10);
        card.calculatetotalRolls();
        expect(card.totalRolls).toEqual(22);
      });

      it("by increasing them to 21 if roll 19 and 20 represent a spare", function(){
        for (i = 0; i < 18; i++) { card.updateScoreArray(1); }
        card.updateScoreArray(5);
        card.updateScoreArray(5);
        card.calculatetotalRolls();
        expect(card.totalRolls).toEqual(21);
      });

    it("but leave them unchanged if 19 + 20 is less than 10", function(){
      for (i = 0; i < 19; i++) { card.updateScoreArray(1); }
      card.updateScoreArray(4);
      card.updateScoreArray(5);
      card.calculatetotalRolls();
      expect(card.totalRolls).toEqual(20);
    });

  });

  describe("can calculate the current score", function(){

    it("can accept scoreArray and calculate base score (with no bonuses)", function(){
      for (i = 0; i < 20; i++) { card.updateScoreArray(3); };
      expect(card.getBasicScore(card.scoreArray)).toEqual(60);
    });

    it("can calculate strike bonuses in scoreArray", function(){
      for (i = 0; i < 20; i++) { card.updateScoreArray(3); };
      card.scoreArray[10] = 10;
      expect(card.getStrikeBonuses(card.scoreArray)).toEqual(6);
    });

    it("can calculate spare bonuses in scoreArray", function(){
      for (i = 0; i < 20; i++) { card.updateScoreArray(3); };
      card.scoreArray[0] = 3;
      card.scoreArray[1] = 7;
      card.scoreArray[2] = 4;
      card.scoreArray[3] = 6;
      expect(card.getSpareBonuses(card.scoreArray)).toEqual(7);
    });

    it("perfect game", function(){
      for (i = 0; i <= 22; i+=2) { 
        card.updateScoreArray(10);
      };
      card.calculatetotalRolls();
      expect(card.getTotalScore(card.scoreArray)).toEqual(300);
    });

  });
  
  describe("can caluclate current frame and roll", function(){
    
    it("(frame) at the beginning of a game", function(){
      expect(card.currentFrame(card.scoreArray)).toEqual(1);
    });

    it("(roll) at the beginning of a game", function(){
      expect(card.currentRoll(card.scoreArray)).toEqual(1);
    });

    it("in the middle of a game", function(){
      for (i = 0; i < 11; i++) { card.updateScoreArray(3); };
      expect(card.currentFrame(card.scoreArray)).toEqual(6);
      expect(card.currentRoll(card.scoreArray)).toEqual(2);
    });
    
  });

  describe("knows how many pins are standing", function(){

    it("at the begining of a frame", function() {
      expect(card.pinsStanding(card.scoreArray)).toEqual(10);
    });

    it("roll 2 after roll 1 was not a strike", function() {
      card.updateScoreArray(3);
      expect(card.pinsStanding(card.scoreArray)).toEqual(7);
    });

  });

});




