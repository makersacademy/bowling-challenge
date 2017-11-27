describe("Bonus", function(){

  beforeEach(function(){
    bonus = new Bonus()
  });

  describe("#isSpare", function(){
    it("is set to false by default", function(){
      expect(bonus.isSpare()).toEqual(false)
    });
  });

  describe("#setSpareTrue", function(){
    it("sets spare to be true", function(){
      bonus.setSpareTrue()
      expect(bonus.isSpare()).toEqual(true)
    });
  });

  describe("#setSpareFalse", function(){
    it("is set to false by default", function(){
      bonus.setSpareFalse()
      expect(bonus.isSpare()).toEqual(false)
    });
  });

  describe("#isStrike", function(){
    it("is set to false by default", function(){
      expect(bonus.isStrike()).toEqual(false)
    });
  });

  describe("#setStrikeTrue", function(){
    it("changes #isSpareBonus from false to true", function(){
      bonus.setStrikeTrue()
      expect(bonus.isStrike()).toEqual(true)
    });

  });

  describe("#setStrikeFalse", function(){
    it("changes #isStrikeBonus from true to false", function(){
      bonus.setStrikeTrue()
      bonus.setStrikeFalse()
      expect(bonus.isStrike()).toEqual(false)
    });
  });

});
