describe("A card", function(){
  
  var card;

  beforeEach(function(){
    card=new Card();
  });

  describe("at initialization should", function(){
    
    it("have 20 rolls", function(){
      expect(card.totalRolls).toEqual(20);
    });

  });

  describe("can check if a game is over", function(){
    
    it("returning true if score array size = totalRolls", function(){
      spyOn(card, 'getCurrentRoll').and.returnValue(20);
      expect(card.isGameOver()).toEqual(true);
    });

    it("returning false if score array size < totalRolls", function(){
      expect(card.isGameOver()).toEqual(false);
    });

  });  

  describe("can log a roll", function(){ // ** these tests do not read well
    
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

    it("which will increase the size of scoreArray by 2 after a roll of 10", function(){
      card.updateScoreArray(10);
      expect(card.scoreArray.length).toEqual(preArraySize+3);
    });

    it("which will register 10 and 0 pins smashed in scoreArray after a roll of 10", function(){
      card.updateScoreArray(10);
      expect(card.scoreArray.pop()).toEqual(0);
      expect(card.scoreArray.pop()).toEqual(10); 
    });

  });

  xdescribe("can update total rolls", function(){

    it("by increasing them to 22 if roll 19 is a strike", function(){
    });

    it("by increasing them to 21 if roll 19 and 20 represent a spare", function(){
    });

    it("but leave them unchanged if 19 + 20 is less than 10", function(){
    });

  });

  xdescribe("can calculate the current score", function(){

    it("", function(){
    });

  });


});
